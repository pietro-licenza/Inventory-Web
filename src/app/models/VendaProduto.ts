import { Produto } from "./Produto";

export class VendaProduto {
    public id?: number;
    public produto?: Produto = new Produto();
    public productId?: number;
    public quantity?: number = 0;
    public price?: number = 0;

    constructor(id?: number, name?: string) {
        if(id)
            this.id = id;
    }
}