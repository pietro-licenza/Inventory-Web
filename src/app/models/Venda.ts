import { Cliente } from "./Cliente";
import { VendaProduto } from "./VendaProduto";

export class Venda {
    public id?: number;
    public paymentMethod?: string;
    public isSaleCompleted?: boolean;
    public createdAt?: Date;
    public updatedAt?: Date;
    public vendaProdutos?: VendaProduto[];
    public vendaProdutos2?: VendaProduto[];
    public cliente?: Cliente;
    public clientId?: number;
    public finalPrice?: number = 0;

    constructor(id?: number, name?: string) {
        if(id)
            this.id = id;

    }
}