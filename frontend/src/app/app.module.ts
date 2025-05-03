import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UniversidadesPublicasComponent } from './universidades-publicas/universidades-publicas.component';
import { UniversidadesPrivadasComponent } from './universidades-privadas/universidades-privadas.component';
import { ComparadorComponent } from './comparador/comparador.component';
import { UdenarComponent } from './udenar/udenar.component';
import { UcesmagComponent } from './ucesmag/ucesmag.component';
import { UnimarComponent } from './unimar/unimar.component';
import { SanmartinComponent } from './sanmartin/sanmartin.component';
import { CooperativaComponent } from './cooperativa/cooperativa.component';
import { UnadComponent } from './unad/unad.component';
import { SenaComponent } from './sena/sena.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniversidadesPublicasComponent,
    UniversidadesPrivadasComponent,
    ComparadorComponent,
    UdenarComponent,
    UcesmagComponent,
    UnimarComponent,
    SanmartinComponent,
    CooperativaComponent,
    UnadComponent,
    SenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
