import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent {
  @Output() editarProduto = new EventEmitter<any>();
  produtoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditarProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) {
    this.produtoForm = this.fb.group({
      titulo: [data.produto.titulo, Validators.required],
      descricao: [data.produto.descricao, Validators.required],
      preco: [data.produto.preco, Validators.required],
    });
  }

  exibirSnackbar(mensagem: string): void {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: 3000,  // Tempo em milissegundos que o snackbar ficará visível
    });
  }

  salvarEdicao(): void {
    this.editarProduto.emit({ id: this.data.produto.id, ...this.produtoForm.value });
    this.exibirSnackbar('Edição salva com sucesso!');
    this.dialogRef.close('edicao-salva');
}

  cancelarEdicao(): void {
    this.dialogRef.close();
  }
}
