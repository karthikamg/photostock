import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NatureComponent } from './nature/nature.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FestivalComponent } from './festival/festival.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NatureComponent,
    DashboardComponent,
    FestivalComponent,
    SeasonsComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
