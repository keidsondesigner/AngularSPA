import { Component, OnInit } from "@angular/core";

import { IProduto } from "src/app/model/produto.model";
import { ProdutosService } from "src/app/service/produtos.service";

@Component({
  selector: "app-lista-produto",
  templateUrl: "./lista-produto.component.html"
})
export class ListaProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutosService) {}

  public produtos: IProduto[] = [];

  ngOnInit() {
    this.produtoService.obterProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  }
}
