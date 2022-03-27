import { Component, OnInit } from "@angular/core";

import { IProduto } from "src/app/model/produto.model";
import { ProdutosService } from "src/app/service/produtos.service";

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-lista-produto",
  templateUrl: "./lista-produto.component.html"
})
export class ListaProdutoComponent implements OnInit {
  constructor(
    private produtoService: ProdutosService,
    private spinner: NgxSpinnerService
  ) {}

  public produtos: IProduto[] = [];

  ngOnInit() {
    this.produtoService.obterProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
      },
      error => console.log(error)
    );

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
}
