export class Usuario {
    public id?: string;
    public name?: string;
    public email?: string;
    public password?: string;
    public role?: string;

    constructor(id?: string, name?: string) {
        if(id)
            this.id = id;

        if(name)
            this.name = name;
    }
}