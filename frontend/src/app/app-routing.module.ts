import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UniversidadesPublicasComponent } from './universidades-publicas/universidades-publicas.component';
import { UniversidadesPrivadasComponent } from './universidades-privadas/universidades-privadas.component';
import { ComparadorComponent } from './comparador/comparador.component';
import { UcesmagComponent } from './ucesmag/ucesmag.component';
import { UnimarComponent } from './unimar/unimar.component';
import { UnadComponent } from './unad/unad.component';
import { SanmartinComponent } from './sanmartin/sanmartin.component';
import { CooperativaComponent } from './cooperativa/cooperativa.component';
import { UdenarComponent } from './udenar/udenar.component';
import { SenaComponent } from './sena/sena.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'universidades/publicas', component: UniversidadesPublicasComponent },
  { path: 'universidades/privadas', component: UniversidadesPrivadasComponent },
  { path: 'comparar', component: ComparadorComponent },
  { path: 'cesmag', component: UcesmagComponent },
  { path: 'unimar', component: UnimarComponent },
  { path: 'unad', component: UnadComponent },
  { path: 'sanmartin', component: SanmartinComponent },
  { path: 'cooperativa', component: CooperativaComponent },
  { path: 'udenar', component: UdenarComponent },
  { path: 'sena', component: SenaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
