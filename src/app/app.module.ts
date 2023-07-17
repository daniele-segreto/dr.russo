import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { ChisiamoComponent } from './components/main/chisiamo/chisiamo.component';
import { TrattamentiComponent } from './components/main/trattamenti/trattamenti.component';
import { ContattiComponent } from './components/main/contatti/contatti.component';
import { FooterTopComponent } from './components/footer/footer-top/footer-top.component';
import { FooterBottomComponent } from './components/footer/footer-bottom/footer-bottom.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    ChisiamoComponent,
    TrattamentiComponent,
    ContattiComponent,
    FooterTopComponent,
    FooterBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
