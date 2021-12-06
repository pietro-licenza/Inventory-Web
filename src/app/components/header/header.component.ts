import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPencilAlt, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/models/Usuario';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario:Usuario = new Usuario()

  faSortDown = faSortDown;
  constructor(
    public router: Router
  ) {
    
  }

  ngOnInit(): void {
    this.usuario.role = localStorage.getItem('inventory-role') + ''
    this.usuario.name = localStorage.getItem('inventory-user') + ''
    this.usuario.id = localStorage.getItem('inventory-id') + ''
  }

  logout() {
    this.router.navigate(['/login'])
  }

  getInitial() {
    return this.usuario.name ? this.usuario.name.substring(0,1) : ''
  }

  comboChange(event:any) {
    switch (event.target.value) {
      case "sair":
        this.logout()
        break;

      case "senha":
        this.router.navigate(['/alterar-senha'])
        break;
    }

    event.target.value = '999'
  }
}
