import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  role:string = '';
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('inventory-role') + ''
  }

}
