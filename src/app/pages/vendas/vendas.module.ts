import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendasComponent } from './vendas.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VendaService } from 'src/app/services/VendaService';



@NgModule({
  declarations: [
    VendasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: VendasComponent }]),
    FormsModule,

    FontAwesomeModule
  ],
  providers: [
    VendaService
  ]
})
export class VendasModule { }
