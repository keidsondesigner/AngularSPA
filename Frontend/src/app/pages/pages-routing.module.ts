import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { PagesComponent } from './pages.component';

const ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'lista-produtos', component: ListaProdutoComponent },
      { path: 'detalhes-produto/:id', component: DetalhesProdutoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
