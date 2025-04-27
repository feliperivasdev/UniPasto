import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UniversidadesComponent } from './universidades/universidades.component';
import { UniversidadesPrivadasComponent } from './universidades-privadas/universidades-privadas.component';
import { UniversidadesPublicasComponent } from './universidades-publicas/universidades-publicas.component';
import { ComparadorComponent } from './comparador/comparador.component';
import { CesmagComponent } from './cesmag/cesmag.component';
import { MarianaComponent } from './mariana/mariana.component';
import { SanMartinComponent } from './san-martin/san-martin.component';
import { CooperativaComponent } from './cooperativa/cooperativa.component';
import { UNADComponent } from './unad/unad.component';
import { UdenarComponent } from './udenar/udenar.component';
import { SenaComponent } from './sena/sena.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Ruta principal
    { path: 'universidades', component: UniversidadesComponent }, // Ruta para universidades
    {path: 'universidades_privadas',component:UniversidadesPrivadasComponent},
    {path: 'universidades_publicas',component:UniversidadesPublicasComponent},
    {path:'comparador',component:ComparadorComponent},
    {path:'unicesmag',component:CesmagComponent},
    {path:'umariana',component:MarianaComponent},
    {path:'usanmartin',component:SanMartinComponent},
    {path:'ucooperativa',component:CooperativaComponent},
    {path:'unad',component:UNADComponent},
    {path:'udenar',component:UdenarComponent},
    {path:'sena',component:SenaComponent}
];
