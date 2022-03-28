import { NgxSpinnerService } from 'ngx-spinner';
import { IProduto } from 'src/app/model/produto.model';
import { ProdutosService } from 'src/app/service/produtos.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {
  constructor(
    private produtoService: ProdutosService,
    private spinner: NgxSpinnerService
  ) {}

  public produtos: IProduto[] = [];

  ngOnInit() {
    this.produtoService.obterProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => console.log(error)
    );
  }
}
