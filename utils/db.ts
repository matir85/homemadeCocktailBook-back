import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'homemade_coctail_book',
    namedPlaceholders: true,
    decimalNumbers: true
})
