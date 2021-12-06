import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../../models/LoginRequest';
import { LoginService } from '../../services/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest();

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    localStorage.removeItem("inventory-token")
  }

  submit() {
    if(this.loginRequest.email == '' || this.loginRequest.password == '') {
      alert("Email e Senha obrigatórios");
      return;
    }

    this.loginService.login(this.loginRequest)
    .subscribe(res => {
      localStorage.setItem("inventory-token", res.token)
      localStorage.setItem("inventory-role", res.role)
      localStorage.setItem("inventory-user", res.name)
      localStorage.setItem("inventory-user-id", res.id)
      this.router.navigate(["/"])
    },
    err => {
      if(err.status == 401) {
        alert("Email ou Senha inválidos")
      } else {
        alert("Ocorreu um erro: " + err.message)
      }
    })
  }
}
