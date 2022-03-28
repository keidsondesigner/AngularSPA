import { IProduto } from 'src/app/model/produto.model';
import { ProdutosService } from 'src/app/service/produtos.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
})
export class DetalhesProdutoComponent implements OnInit {
  public produto!: IProduto;

  constructor(
    private produtoService: ProdutosService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obterProduto();
  }

  obterProduto() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.produtoService.obterProdutoId(id).subscribe((produto) => {
      this.produto = produto;
    });
  }
}
