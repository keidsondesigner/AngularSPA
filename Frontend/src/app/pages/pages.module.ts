import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { ListaProdutoComponent } from "./lista-produto/lista-produto.component";
import { LandingModule } from "../landing/landing.module";
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

@NgModule({
  declarations: [PagesComponent, ListaProdutoComponent, DetalhesProdutoComponent],
  imports: [CommonModule, PagesRoutingModule, LandingModule],
  exports: []
})
export class PagesModule {}
