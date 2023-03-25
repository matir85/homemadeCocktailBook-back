import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {productRouter} from "./routers/product";
import {coctailRouter} from "./routers/coctail";

const app = express()

app.use(cors({
        origin: 'http://localhost:3000'
    }
));
app.use(json());

app.use('/product', productRouter);
app.use('/coctail', coctailRouter);

app.listen(3001, ()=>{
    console.log('Nasłuchiwanie na http://localhost:3001')
})
