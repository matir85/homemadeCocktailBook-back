import {Request, Response, Router} from "express";
import {CocktailRecipeRecord} from "../records/cocktailRecipe.record";
import {GetCoctailRecipe} from "../types";


export const coctailRecipeRouter = Router()

coctailRecipeRouter
    .post('/', async (req: Request, res: Response) => {
        const newCoctailRecipe = new CocktailRecipeRecord(req.body);
        await newCoctailRecipe.insert();
        res.json(newCoctailRecipe);
    })
    .get('/:id', async (req: Request, res: Response) => {
        const recipe: GetCoctailRecipe[] = await CocktailRecipeRecord.getOne(req.params.id)
        res.json(recipe)

    })
