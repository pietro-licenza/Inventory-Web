import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ClienteService {

    token:any = ''

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem("inventory-token") ? localStorage.getItem("inventory-token") : '';
    }

    getClientes() {
        return this.http.get<[]>(environment.basePath + '/clients', { headers: { "Authorization" : this.token } });
    } 

    addCliente(cliente:any) {
        return this.http.post<[]>(environment.basePath + '/clients', cliente, { headers: { "Authorization" : this.token } });
    } 

    updateCliente(cliente:any) {
        return this.http.put<[]>(environment.basePath + '/clients/' + cliente.id, cliente, { headers: { "Authorization" : this.token } });
    }

    deletarCliente(cliente:any) {
        return this.http.delete<[]>(environment.basePath + '/clients/' + cliente.id, { headers: { "Authorization" : this.token } });
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