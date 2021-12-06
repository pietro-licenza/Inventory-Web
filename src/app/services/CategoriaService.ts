import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Categoria } from "../models/Categoria";

@Injectable()
export class CategoriaService {

    token:any = ''

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem("inventory-token") ? localStorage.getItem("inventory-token") : '';
    }

    getCategorias() {
        return this.http.get<[]>(environment.basePath + '/categories', { headers: { "Authorization" : this.token } });
    } 

    cadCategoria(categoria: Categoria) {
        return this.http.post<[]>(environment.basePath + '/categories', categoria, { headers: { "Authorization" : this.token } });
    } 

    alterarCategoria(categoria: Categoria) {
        return this.http.put<[]>(environment.basePath + '/categories/' + categoria.id, categoria, { headers: { "Authorization" : this.token } });
    } 

    deletarCategoria(categoria: Categoria) {
        return this.http.delete<[]>(environment.basePath + '/categories/' + categoria.id, { headers: { "Authorization" : this.token } });
    } 
}