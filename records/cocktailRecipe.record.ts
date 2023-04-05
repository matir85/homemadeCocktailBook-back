import {CocktailRecipeEntity} from "../types/coctail_product/cocktail_recipe_entity";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from "uuid";


type CocktailRecipeRecordResults = [CocktailRecipeEntity[], FieldPacket[]];
class CocktailRecipeRecord implements CocktailRecipeEntity {
    public id?: string;
    public idCoctail: string;
    public idProduct: string;
    public quantity: number;

    constructor(obj: CocktailRecipeEntity) {
        this.id = obj.id;
        this.idCoctail = obj.idCoctail;
        this.idProduct = obj.idProduct;
        this.quantity = obj.quantity;
    }

    static async listAll(): Promise<CocktailRecipeRecord[]> {
        const [resault] = await pool.execute('SELECT * FROM `cocktail_recipe`') as CocktailRecipeRecordResults;
        return resault.map((obj) => new CocktailRecipeRecord(obj));
    }

    static async getOne(id: string): Promise<CocktailRecipeRecord | null> {
        const [resault] = await pool.execute('SELECT * FROM `cocktail_recipe` WHERE `id` = :id', {
            id,
        }) as CocktailRecipeRecordResults;
        return resault.length === 0 ? null : new CocktailRecipeRecord(resault[0]);
    }

    async insert() {
        if (!this.id) {
            this.id = uuid()
        }else {
            throw new Error('Produkt o takim id nie istnieje')
        }
        await pool.execute('INSERT INTO `cocktail_recipe` VALUE(:id, :idCoctail, :idProduct, :quantity)', {
            id: this.id,
            idCoctail: this.idCoctail,
            idProduct: this.idProduct,
            quantity: this.quantity,
        });
        return this.id
    }
}

