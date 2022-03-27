import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduto } from "../model/produto.model";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";

@Injectable()
export class ProdutosService {
  constructor(private http: HttpClient) {}

  protected baseUrl = environment.host + "/produtos";

  obterProdutos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.baseUrl);
  }

  obterProdutoId(id: number): Observable<IProduto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IProduto>(url);
  }
}
