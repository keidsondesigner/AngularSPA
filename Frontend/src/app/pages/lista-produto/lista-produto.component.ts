import { Observable } from 'rxjs';
import { IProduto } from 'src/app/model/produto.model';
import { ProdutosService } from 'src/app/service/produtos.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutosService) {}

  public produtos$: Observable<IProduto[]>;

  ngOnInit() {
    this.produtos$ = this.produtoService.obterProdutos();
  }
}
