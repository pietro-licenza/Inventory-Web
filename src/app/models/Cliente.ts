import { Categoria } from "./Categoria";

export class Cliente {
    public id?: number;
    public name?: string;
    public email?: string;
    public phoneNumber?: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor() {
        this.name = '';
    }
}