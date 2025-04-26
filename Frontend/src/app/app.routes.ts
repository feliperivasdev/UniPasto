import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UniversidadesComponent } from './universidades/universidades.component';
import { UniversidadesPrivadasComponent } from './universidades-privadas/universidades-privadas.component';
import { UniversidadesPublicasComponent } from './universidades-publicas/universidades-publicas.component';
import { ComparadorComponent } from './comparador/comparador.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Ruta principal
    { path: 'universidades', component: UniversidadesComponent }, // Ruta para universidades
    {path: 'universidades_privadas',component:UniversidadesPrivadasComponent},
    {path: 'universidades_publicas',component:UniversidadesPublicasComponent},
    {path:'comparador',component:ComparadorComponent}
];
