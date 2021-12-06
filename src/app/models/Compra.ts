import { CompraProduto } from "./CompraProduto";
import { Fornecedor } from "./Fornecedor";

export class Compra {
    public id?: number;
    public providerId?: number;
    public data?: Date;
    public fornecedor ?: Fornecedor
    public compraProdutos?: CompraProduto[];
    public finalPrice?: number = 0;

    constructor(id?: number, name?: string) {
        if(id)
            this.id = id;

    }
}