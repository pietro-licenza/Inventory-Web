import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoComponent } from './orcamento.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VendaService } from 'src/app/services/VendaService';



@NgModule({
  declarations: [
    OrcamentoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: OrcamentoComponent }]),
    FormsModule,

    FontAwesomeModule
  ],
  providers: [
    VendaService
  ]
})
export class OrcamentoModule { }
