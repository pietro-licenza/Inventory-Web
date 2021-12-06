import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Produto } from "../models/Produto";

@Injectable()
export class ProdutoService {

    token:any = ''

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem("inventory-token") ? localStorage.getItem("inventory-token") : '';
    }

    getProdutos() {
        return this.http.get<[]>(environment.basePath + '/products', { headers: { "Authorization" : this.token } });
    } 

    cadProduto(produto: Produto) {
        return this.http.post<[]>(environment.basePath + '/products', produto, { headers: { "Authorization" : this.token } });
    } 

    alterarProduto(produto: Produto) {
        return this.http.put<[]>(environment.basePath + '/products/' + produto.id, produto, { headers: { "Authorization" : this.token } });
    } 

    deletarProduto(produto: Produto) {
        return this.http.delete<[]>(environment.basePath + '/products/' + produto.id, { headers: { "Authorization" : this.token } });
    } 

    
}