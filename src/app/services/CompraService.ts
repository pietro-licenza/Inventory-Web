import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CompraService {

    token:any = ''

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem("inventory-token") ? localStorage.getItem("inventory-token") : '';
    }

    getCompras() {
        return this.http.get<[]>(environment.basePath + '/purchases', { headers: { "Authorization" : this.token } });
    } 

    criarCompra(compra: any) {
        return this.http.post<[]>(environment.basePath + '/purchases', compra, { headers: { "Authorization" : this.token } });
    } 

    // cadProduto(produto: Produto) {
    //     return this.http.post<[]>(environment.basePath + '/products', produto, { headers: { "Authorization" : this.token } });
    // } 

    // alterarProduto(produto: Produto) {
    //     return this.http.put<[]>(environment.basePath + '/products/' + produto.id, produto, { headers: { "Authorization" : this.token } });
    // } 

    // deletarProduto(produto: Produto) {
    //     return this.http.delete<[]>(environment.basePath + '/products/' + produto.id, { headers: { "Authorization" : this.token } });
    // } 

    
}