import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduto } from "../model/produto.model";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class ProdutosService {
  constructor(private http: HttpClient) {}

  protected urlServiceV1: string = "http://localhost:3000/";

  obterProdutos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.urlServiceV1 + "produtos");
  }
}
