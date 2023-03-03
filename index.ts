import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';

const app = express()

app.use(cors({
        origin: 'http://localhost:3000'
    }
));
app.use(json());


app.listen(3001, ()=>{
    console.log('Nasłuchiwanie na http://192.168.1.197:3001')
})
