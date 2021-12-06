export class Categoria {
    public id?: number;
    public name?: string;

    constructor(id?: number, name?: string) {
        if(id)
            this.id = id;

        if(name)
            this.name = name;
    }
}