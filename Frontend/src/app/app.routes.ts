import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UniversidadesComponent } from './universidades/universidades.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Ruta principal
    { path: 'universidades', component: UniversidadesComponent } // Ruta para universidades
];
