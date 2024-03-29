import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos.component';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from './componentes/container/container.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { FormularioProdutoComponent } from './paginas/formulario-produto/formulario-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarProdutoComponent } from './paginas/editar-produto/editar-produto.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    CabecalhoComponent,
    ContainerComponent,
    SeparadorComponent,
    FormularioProdutoComponent,
    EditarProdutoComponent,
    
    
  
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule
    
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ],
})
export class AppModule { }
