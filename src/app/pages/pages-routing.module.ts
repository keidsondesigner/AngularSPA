import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaProdutoComponent } from "./lista-produto/lista-produto.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "pages",
    pathMatch: "full"
  },
  {
    path: "",
    component: PagesComponent,
    children: [{ path: "lista-produto", component: ListaProdutoComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
