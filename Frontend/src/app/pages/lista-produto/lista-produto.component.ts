import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public produtos$: Observable<IProduto[]>;

  ngOnInit() {
    this.produtos$ = this.produtoService.obterProdutos();

    this.activatedRoute.snapshot.paramMap.get('id');
  }

  onClick(produto: any) {
    this.router.navigate(['/detalhes-produto', produto.id])
  }
}
