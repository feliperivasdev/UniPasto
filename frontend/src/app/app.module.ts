import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UniversidadesPublicasComponent } from './universidades-publicas/universidades-publicas.component';
import { UniversidadesPrivadasComponent } from './universidades-privadas/universidades-privadas.component';
import { HttpClientModule } from '@angular/common/http';
import { UnadComponent } from './unad/unad.component';
import { UdenarComponent } from './udenar/udenar.component';
import { SanmartinComponent } from './sanmartin/sanmartin.component';
import { SenaComponent } from './sena/sena.component';
import { CooperativaComponent } from './cooperativa/cooperativa.component';
import { ComparadorComponent } from './comparador/comparador.component';
import { UnimarComponent } from './unimar/unimar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UniversidadesPublicasComponent,
    UniversidadesPrivadasComponent,
    UnadComponent,
    UdenarComponent,
    SanmartinComponent,
    SenaComponent,
    CooperativaComponent,
    ComparadorComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
