import { Categoria } from "./Categoria";

export class Produto {
    public id?: number;
    public name: string =  '';
    public price?: number = 0;
    public quantity?: number;
    public createdAt?: Date;
    public updatedAt?: Date;
    public categoria?: Categoria;
    public categoryId?: number;

    constructor() {
        this.name = '';
        this.price = 0;
        this.quantity = 0;
        this.categoryId = 0
    }
}