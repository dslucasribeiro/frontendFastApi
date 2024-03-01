import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  styleUrl: './formulario-produto.component.css'
})
export class FormularioProdutoComponent implements OnInit{

  produtoForm!: FormGroup;

  constructor(
    private produtoService: ProdutoService,
    private router: Router) {

  }

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.produtoForm = new FormGroup({
      id: new FormControl('', Validators.required), // Adicionando validação (required
      titulo: new FormControl('',  Validators.required),
      descricao: new FormControl('',  Validators.required),
      preco: new FormControl('',  Validators.required),
    });
  }

  salvarProduto(){
    const novoProduto = this.produtoForm.value;
    this.produtoService.adicionarProduto(novoProduto).subscribe(
      (response) => {
        console.log('Produto adicionado:', response);
        this.router.navigate(['/produtos']);
      },
      (error) => {
        console.error('Erro ao adicionar produto:', error);
      }
    );
  }

  cancelar() {
    this.produtoForm.reset();
  }
}
