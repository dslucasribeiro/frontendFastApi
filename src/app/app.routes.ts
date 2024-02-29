import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos.component';
import { FormularioProdutoComponent } from './paginas/formulario-produto/formulario-produto.component';

export const routes: Routes = [
    { path: '', redirectTo: 'produtos', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'produtos', component: ListaProdutosComponent },
    { path: 'formulario', component: FormularioProdutoComponent},
];
