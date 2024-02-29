import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
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


@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    CabecalhoComponent,
    ContainerComponent,
    SeparadorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ],
})
export class AppModule { }
