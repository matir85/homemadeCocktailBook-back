import {CoctailEntity} from "../types";
import {ValidateErrors} from "../utils/errors";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from "uuid";

type CoctailRecordResults = [CoctailEntity[], FieldPacket[]];
export class CoctailRecord implements CoctailEntity {
public id?: string;
public name: string;
public description: string

    constructor(obj: CoctailEntity) {
    if (!obj.name || obj.name.length < 3 || obj.name.length > 100) {
        throw new ValidateErrors('Nazwa koktajlu musi mieć minimum 3 znaki i nie przekraczać 100 znaków')
    }
    if(!obj.description || obj.description.length < 3 || obj.description.length > 1000) {
        throw new ValidateErrors('Opis koktajlu musi mieć minimum 3 znaki i nie przekraczać 1000 znaków')
    }
    this.id = obj.id;
    this.name = obj.name;
    this.description = obj.description;
    }
    static async listAll(): Promise<CoctailRecord[]> {
        const [resault] = await pool.execute('SELECT * FROM `coctail`') as CoctailRecordResults;
        return resault.map((obj) => new CoctailRecord(obj));
    }

    async insert() {
        if (!this.id) {
            this.id = uuid()
        }else {
            throw new Error('Koktail o takim id nie istnieje')
        }
        await pool.execute('INSERT INTO `coctail` (`id`, `name`, `description`) VALUE(:id, :name, :description)', {
            id: this.id,
            name: this.name,
            description: this.description,
        });
        return this.id
    }

}
