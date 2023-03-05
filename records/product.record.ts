import {ProductEntity} from "../types";

export class ProductRecord implements ProductEntity {
    public id?: string;
    public name: string;
    public quantity: number
}
