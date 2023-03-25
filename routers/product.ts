import {Request, Response, Router} from "express";
import {ProductRecord} from "../records/product.record";
import {ValidateErrors} from "../utils/errors";

export const productRouter = Router()

productRouter
    .get('/', async (req: Request, res: Response) => {
        const productList = await ProductRecord.listAll();
        res.json({
            productList,
        })
    })
    .post('/', async (req: Request, res: Response) => {

        const newProduct = new ProductRecord(req.body);
        await newProduct.insert();
        res.json(newProduct);
    })
    .delete('/:productId', async (req, res) => {
        const product = await ProductRecord.getOne(req.params.productId);
        if (!product) {
            throw new ValidateErrors('Taki prezent nie istnieje')
        }
        console.log(`Produkt do usunięcia: ${product}`)
        await product.delete()

        res.end();
    })
