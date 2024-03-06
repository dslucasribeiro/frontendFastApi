import { Routes } from '@angular/router';
import { ListaProdutosComponent } from './paginas/lista-produtos/lista-produtos.component';
import { FormularioProdutoComponent } from './paginas/formulario-produto/formulario-produto.component';

export const routes: Routes = [
    { path: '', redirectTo: 'produtos', pathMatch: 'full'},
    { path: 'produtos', component: ListaProdutosComponent },
    { path: 'formulario', component: FormularioProdutoComponent},
];
