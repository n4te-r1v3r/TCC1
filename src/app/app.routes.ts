import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListaChamadosComponent } from './lista-chamados/lista-chamados.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { ListaGeralComponent } from './lista-geral/lista-geral.component';
export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'chamados', component: ListaChamadosComponent },
    { path: 'relatorios', component: RelatoriosComponent },
    { path: 'ativos', component: ListaGeralComponent },
];