import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: Dash, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  // { path: '',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: '',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'produtos',loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)},
  { path: 'add-produto',loadChildren: () => import('./produtos/add-product/add-product.module').then(m => m.AddProductModule)},
  { path: 'categorias',loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule)},
  { path: 'add-categoria',loadChildren: () => import('./categorias/add-categoria/add-categoria.module').then(m => m.AddCategoriaModule)},
  { path: 'vendas',loadChildren: () => import('./vendas/vendas.module').then(m => m.VendasModule)},
  { path: 'detalhe-venda',loadChildren: () => import('./vendas/detalhe-venda/detalhe-venda.module').then(m => m.DetalheVendaModule)},
  { path: 'add-venda',loadChildren: () => import('./vendas/add-venda/add-venda.module').then(m => m.AddVendaModule)},
  { path: 'orcamentos',loadChildren: () => import('./orcamento/orcamento.module').then(m => m.OrcamentoModule)},
  { path: 'detalhe-orcamento',loadChildren: () => import('./orcamento/detalhe-orcamento/detalhe-orcamento.module').then(m => m.DetalheOrcamentoModule)},
  { path: 'add-orcamento',loadChildren: () => import('./orcamento/add-orcamento/add-orcamento.module').then(m => m.AddOrcamentoModule)},

  { path: 'compras',loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule)},
  { path: 'detalhe-compra',loadChildren: () => import('./compras/detalhe-compras/detalhe-compras.module').then(m => m.DetalheComprasModule)},
  { path: 'add-compra',loadChildren: () => import('./compras/add-compra/add-compra.module').then(m => m.AddCompraModule)},

  { path: 'usuarios',loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)},
  { path: 'add-usuario',loadChildren: () => import('./usuarios/add-usuario/add-usuario.module').then(m => m.AddUsuarioModule)},
  { path: 'alterar-senha',loadChildren: () => import('./alterar-senha/alterar-senha.module').then(m => m.AlterarSenhaModule)},

  { path: 'clientes',loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)},
  { path: 'add-cliente',loadChildren: () => import('./clientes/add-clientes/add-clientes.module').then(m => m.AddClienteModule)},

  { path: 'fornecedores',loadChildren: () => import('./fornecedores/fornecedores.module').then(m => m.FornecedoresModule)},
  { path: 'add-fornecedor',loadChildren: () => import('./fornecedores/add-fornecedores/add-fornecedores.module').then(m => m.AddFornecedorModule)},

  { path: 'dashboard',loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},

  // { path: 'sign-up', canActivate: [IsNotLoggedGuard] , loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
 