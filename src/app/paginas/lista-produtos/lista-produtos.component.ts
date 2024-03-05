// src/app/lista-produtos/lista-produtos.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';

import { Produto } from '../../componentes/produto/produto';
import { MatDialog } from '@angular/material/dialog';
import { EditarProdutoComponent } from '../editar-produto/editar-produto.component';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
})
export class ListaProdutosComponent implements OnInit {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  produtos: Produto[] = [];
  produtoEmEdicao: Produto | null = null;
  filtroPorTexto: string = '';
  @Input() id: number = 0;
  @Input() nome: string = ''
  @Input() descricao: string = ''
  @Input() preco: string = ''

  constructor(private produtoService: ProdutoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.listarProdutos();
  }


  private listarProdutos(): void {
    this.produtoService.listarProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.error('Erro ao listar produtos:', error);
      }
    );
  }

  editarProduto(produto: Produto): void {
    const dialogRef = this.dialog.open(EditarProdutoComponent, {
        data: { produto },
        width: '800px',
    });

    dialogRef.componentInstance.editarProduto.subscribe((dadosEditados: any) => {
        this.produtoService.editarProduto(dadosEditados).subscribe(
            (resposta) => {
                this.listarProdutos();
            },
            (error) => {
                console.error('Erro ao editar produto:', error);
            }
        );
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('O modal foi fechado, com resultado:', result);
    });
}

  excluirProduto(id: number): void {
    this.produtoService.excluirProduto(id).subscribe(
      () => {
        this.listarProdutos();
        console.log('Produto excluído com sucesso!');
      },
      (error) => {
        console.error('Erro ao excluir produto:', error);
      }
    );
  }

  // Remove os acentos de uma string
  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarProdutosPorTexto(): any[] {
    if (!this.filtroPorTexto) {
      return this.produtos;
    }
    return this.produtos.filter(produtos => {
      // Compara os nomes sem acentuações
      return this.removerAcentos(produtos.titulo).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    })
  }

  filtrarProdutosPorLetraInicial(letra: string): any[] {
    return this.filtrarProdutosPorTexto().filter(produto => {
      // Compara a letra inicial sem considerar acentuações
      return this.removerAcentos(produto.titulo).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase());
    })
  }
}