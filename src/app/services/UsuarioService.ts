import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuario } from "../models/Usuario";

@Injectable()
export class UsuarioService {

    token:any = ''

    constructor(private http: HttpClient) {
        this.token = localStorage.getItem("inventory-token") ? localStorage.getItem("inventory-token") : '';
    }

    getUsuarios() {
        return this.http.get<[]>(environment.basePath + '/users', { headers: { "Authorization" : this.token } });
    } 

    cadUsuario(usuario: Usuario) {
        return this.http.post<[]>(environment.basePath + '/users', usuario, { headers: { "Authorization" : this.token } });
    } 

    resetPwd(usuario:any) {
        return this.http.put<[]>(environment.basePath + '/users/' + usuario.id + '/changePwd', usuario, { headers: { "Authorization" : this.token } });
    }

    /*alterarCategoria(categoria: Categoria) {
        return this.http.put<[]>(environment.basePath + '/categories/' + categoria.id, categoria, { headers: { "Authorization" : this.token } });
    } 

    deletarCategoria(categoria: Categoria) {
        return this.http.delete<[]>(environment.basePath + '/categories/' + categoria.id, { headers: { "Authorization" : this.token } });
    } */
}