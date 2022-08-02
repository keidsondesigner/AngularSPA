import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IProduto } from 'src/app/model/produto.model';
import { ProdutosService } from 'src/app/service/produtos.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
})
export class DetalhesProdutoComponent implements OnInit {
  public produto$: Observable<IProduto>;

  constructor(
    private produtoService: ProdutosService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.produto$ = this.obterProduto();
  }

  obterProduto(): Observable<IProduto> {
    return this.activatedRoute.params.pipe(
      map((params) => params.id),
      switchMap((id) => this.produtoService.obterProdutoId(id))
    );
  }
}
