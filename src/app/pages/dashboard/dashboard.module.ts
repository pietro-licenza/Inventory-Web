import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from 'src/app/services/ProdutoService';
import { CompraService } from 'src/app/services/CompraService';
import { VendaService } from 'src/app/services/VendaService';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
    FormsModule
  ],
  providers: [
    ProdutoService,
    CompraService,
    VendaService
  ]
})
export class DashboardModule { }
