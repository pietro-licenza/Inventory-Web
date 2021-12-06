import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginRequest } from "../models/LoginRequest";

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {}

    login(loginRequest: LoginRequest) {
        return this.http.post<any>(environment.basePath + '/session', loginRequest);
    }
}