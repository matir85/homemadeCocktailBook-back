import {Request, Response, Router} from "express";
import {ProductRecord} from "../records/product.record";

export const productRouter = Router()

productRouter
    .get('/', async (req: Request, res: Response) => {
        const productList = await ProductRecord.listAll();
        res.json({
            productList,
        })
        console.log(productList)
    })
    .post('/', async (req: Request, res: Response) => {

        const newProduct = new ProductRecord(req.body);
        await newProduct.insert();
        res.json(newProduct);
    })
