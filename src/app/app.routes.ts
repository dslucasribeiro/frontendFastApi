import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

export const routes: Routes = [
    { path: '', redirectTo: 'produtos', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'produtos', component: ListaProdutosComponent },
];
