import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ProdutosService } from "src/app/service/produtos.service";
import { IProduto } from "src/app/model/produto.model";

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-detalhes-produto",
  templateUrl: "./detalhes-produto.component.html",
  styleUrls: ["./detalhes-produto.component.scss"]
})
export class DetalhesProdutoComponent implements OnInit {
  public produto!: IProduto;

  constructor(
    private produtoService: ProdutosService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.obterProduto();

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  obterProduto() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.produtoService.obterProdutoId(id).subscribe(produto => {
      this.produto = produto;
    });
  }
}
