import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.produtoForm = this.fb.group({
      titulo: [data.produto.titulo, Validators.required],
      descricao: [data.produto.descricao, Validators.required],
      preco: [data.produto.preco, Validators.required],
    });
  }

  salvarEdicao(): void {
    this.editarProduto.emit({ id: this.data.produto.id, ...this.produtoForm.value });
    this.dialogRef.close('edicao-salva');
}

  cancelarEdicao(): void {
    this.dialogRef.close();
  }
}
