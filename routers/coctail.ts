import {Request, Response, Router} from "express";
import {CoctailRecord} from "../records/coctail.record";


export const coctailRouter = Router();

coctailRouter
    .get('/', async (req: Request, res: Response) => {
        const coctailList = await CoctailRecord.listAll();
        res.json({
            coctailList,
        })
    })
    .post('/', async (req: Request, res: Response) => {
        const newCoctailName = new CoctailRecord(req.body);
        await newCoctailName.insert();
        res.json(newCoctailName);
    })

