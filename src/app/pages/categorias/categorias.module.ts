import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriaService } from 'src/app/services/CategoriaService';



@NgModule({
  declarations: [
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CategoriasComponent }]),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    CategoriaService
  ]
})
export class CategoriasModule { }
