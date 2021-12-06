import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedoresComponent } from './fornecedores.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FornecedorService } from 'src/app/services/FornecedorService';



@NgModule({
  declarations: [
    FornecedoresComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FornecedoresComponent }]),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    FornecedorService
  ]
})
export class FornecedoresModule { }
