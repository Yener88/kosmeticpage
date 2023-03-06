import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AIntroComponent } from './a-intro/a-intro.component';
import { BLeistungenComponent } from './b-leistungen/b-leistungen.component';
import { CPreislisteComponent } from './c-preisliste/c-preisliste.component';
import { DKontaktComponent } from './d-kontakt/d-kontakt.component';
import { EFooterComponent } from './e-footer/e-footer.component';
import { AaAboutComponent } from './aa-about/aa-about.component';

@NgModule({
  declarations: [
    AppComponent,
    AIntroComponent,
    BLeistungenComponent,
    CPreislisteComponent,
    DKontaktComponent,
    EFooterComponent,
    AaAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
