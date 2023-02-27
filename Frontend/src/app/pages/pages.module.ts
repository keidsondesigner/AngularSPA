import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LandingModule } from '../landing/landing.module';
import { SharedModule } from '../shared/shared.module';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
    ListaProdutoComponent,
    DetalhesProdutoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    LandingModule
  ],
})
export class PagesModule {}
