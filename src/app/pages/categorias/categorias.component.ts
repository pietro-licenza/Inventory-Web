import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/CategoriaService';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  faPencil = faPencilAlt;

  categorias: Categoria[] = []

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.categoriaService.getCategorias()
    .subscribe(cats => {
      
      this.categorias = cats.map((c:any) => {
        return new Categoria(c.id, c.name)
      })
      
    })
    
  }

  addCategoria() {
    this.router.navigate(['/add-categoria'])
  }

  editCategoria(categoria: Categoria) {
    this.router.navigate(['/add-categoria'], { state: { categoria }})
  }

}
