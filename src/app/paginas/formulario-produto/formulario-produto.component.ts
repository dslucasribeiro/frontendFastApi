import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  styleUrl: './formulario-produto.component.css'
})
export class FormularioProdutoComponent {

  produtoForm!: FormGroup;

  constructor() {
    this.produtoForm = new FormGroup({
      id: new FormControl('', Validators.required), // Adicionando validação (required
      titulo: new FormControl('',  Validators.required),
      descricao: new FormControl('',  Validators.required),
      preco: new FormControl('',  Validators.required),
    });
  }

  salvarProduto(){
    if (this.produtoForm.valid) {
      console.log(this.produtoForm.value);
    }  else {
      alert('Formulário inválido');
    }
    
  }

  cancelar() {
    this.produtoForm.reset();
  }
}
