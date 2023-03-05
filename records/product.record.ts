import {FieldPacket} from "mysql2";
import {v4 as uuid} from "uuid"

import {ProductEntity} from "../types";
import {pool} from "../utils/db";
import {ValidateErrors} from "../utils/errors";

type ProductRecordResults = [ProductEntity[], FieldPacket[]];
export class ProductRecord implements ProductEntity {
    public id?: string;
    public name: string;
    public quantity: number

    constructor(obj: ProductEntity) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 60){
            throw new ValidateErrors('Nazwa produktu musi mieć minimum 3 znaki i nie przekraczać 60 znaków')
        }
        if(!obj.quantity || obj.quantity < 0){
            throw new ValidateErrors('Ilość produktu musi mieć dodatnią wartość')
        }
        this.id = obj.id;
        this.name = obj.name;
        this.quantity = obj.quantity;
    }

    static async listAll(): Promise<ProductRecord[]> {
        const [resault] = await pool.execute('SELECT * FROM `product`') as ProductRecordResults;
        return resault.map((obj) => new ProductRecord(obj));
    }
    static async getOne(id: string): Promise<ProductRecord> | null {
        const [resault] = await pool.execute('SELECT * FROM `product` WHERE `id` = :id', {
            id,
        }) as ProductRecordResults;
        return resault.length === 0 ? null : new ProductRecord(resault[0]);
    }
    async insert() {
        if (!this.id) {
            this.id = uuid()
        }else {
            throw new Error('Produkt o takim id nie istnieje')
        }
        await pool.execute('INSERT INTO `product` VALUE(:id, :name, :quantity)', {
            id: this.id,
            name: this.name,
            quantity: this.quantity,
        });
        return this.id
    }
    async delete(): Promise<void> {
        await pool.execute('DELETE FROM `product` WHERE `id` = :id', {
            id: this.id,
        });
    }
    async update(): Promise<void> {
        await pool.execute('UPDATE `product` SET `name` = :name, `quantity` = :quantity WHERE `id` = :id', {
            id: this.id,
            name: this.name,
            quantity: this.quantity,
        });
    }

}
