import {ProductEntity} from "./product.entity";

export type CreateProduct =Omit<ProductEntity, 'id'>
