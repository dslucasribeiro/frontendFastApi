// src/app/services/produto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Produto {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = 'http://127.0.0.1:8000';  // Atualize com a URL da sua API

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}/produtos`);
  }
}
