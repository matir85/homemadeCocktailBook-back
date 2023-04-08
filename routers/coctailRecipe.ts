import {Request, Response, Router} from "express";
import {CocktailRecipeRecord} from "../records/cocktailRecipe.record";


export const coctailRecipeRouter = Router()

coctailRecipeRouter
    .post('/', async (req: Request, res: Response) => {
        const newCoctailRecipe = new CocktailRecipeRecord(req.body);
        await newCoctailRecipe.insert();
        res.json(newCoctailRecipe);
    })
