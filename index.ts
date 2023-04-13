import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {productRouter} from "./routers/product";
import {coctailRouter} from "./routers/coctail";
import {coctailRecipeRouter} from "./routers/coctailRecipe";

const app = express()

app.use(cors({
        origin: 'http://localhost:3000',
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders: ["Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
        credentials: true
    }
));
app.use(json());

app.use('/product', productRouter);
app.use('/coctail', coctailRouter);
app.use('/cocktail-recipe', coctailRecipeRouter);

app.listen(3001, () => {
    console.log('Nasłuchiwanie na http://localhost:3001')
})
