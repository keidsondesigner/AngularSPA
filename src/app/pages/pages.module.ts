import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';


@NgModule({
  declarations: [
    PagesComponent,
    ListaProdutoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
