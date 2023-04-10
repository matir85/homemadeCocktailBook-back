import {CocktailRecipeEntity, GetCoctailRecipe} from "../types";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from "uuid";


type CocktailRecipeRecordResults = [GetCoctailRecipe[], FieldPacket[]];
export class CocktailRecipeRecord implements CocktailRecipeEntity {
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


    static async getOne(id: string): Promise<GetCoctailRecipe[]> {
        const resault = await pool.execute('SELECT `product`.`name`, `coctail_recipe`.`quantity`FROM  `product` INNER JOIN `coctail_recipe` ON `product`.`id` = `coctail_recipe`.`idProduct`  WHERE `coctail_recipe`.`idCoctail` = :id', {
            id,
        }) as CocktailRecipeRecordResults;
        console.log(resault[0])
        return  resault[0]
    }

    async insert() {
        if (!this.id) {
            this.id = uuid()
        }else {
            throw new Error('Produkt o takim id nie istnieje')
        }
        await pool.execute('INSERT INTO `coctail_recipe` (`id`, `idCoctail`, `idProduct`, `quantity`) VALUE(:id, :idCoctail, :idProduct, :quantity)', {
            id: this.id,
            idCoctail: this.idCoctail,
            idProduct: this.idProduct,
            quantity: this.quantity,
        });
        return this.id
    }
}

