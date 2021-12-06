import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Venda } from "../models/Venda";

@Injectable()
export class VendaService {

    token:any = ''

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem("inventory-token") ? localStorage.getItem("inventory-token") : '';
    }

    getVendas() {
        return this.http.get<[]>(environment.basePath + '/sales', { headers: { "Authorization" : this.token } });
    } 

    criarVenda(venda: any) {
        return this.http.post<[]>(environment.basePath + '/sales', venda, { headers: { "Authorization" : this.token } });
    } 

    efetuarVenda(venda:any) {
        return this.http.put<[]>(environment.basePath + '/sales/' + venda.id + '/salesCompleted', venda, { headers: { "Authorization" : this.token } });
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