import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoriaComponent } from './add-categoria.component';
import { RouterModule } from '@angular/router';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCategoriaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddCategoriaComponent }]),
    FormsModule 
  ],
  providers: [
    CategoriaService
  ]
})
export class AddCategoriaModule { }
