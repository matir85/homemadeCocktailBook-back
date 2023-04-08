import {Router} from "express";
import {CocktailRecipeRecord} from "../records/cocktailRecipe.record";



export const coctailRecipeRouter = Router()

coctailRecipeRouter
.post('/', async (req, res) => {
    const newCoctailRecipe = new CocktailRecipeRecord(req.body);
    console.log(req.body)
    await newCoctailRecipe.insert();
    res.json(newCoctailRecipe);
})
