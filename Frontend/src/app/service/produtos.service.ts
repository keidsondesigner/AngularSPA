import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IProduto } from '../model/produto.model';

@Injectable()
export class ProdutosService {
  constructor(
    private readonly http: HttpClient,
    private readonly spinnerService: NgxSpinnerService
  ) {}

  protected baseUrl = environment.host + '/produtos';

  obterProdutos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.baseUrl).pipe();
  }

  obterProdutoId(id: number): Observable<IProduto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IProduto>(url);
  }
}
