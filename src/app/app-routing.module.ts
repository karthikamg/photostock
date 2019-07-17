import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NatureComponent } from './nature/nature.component';
import { FestivalComponent } from './festival/festival.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { SigninComponent } from './signin/signin.component';
import { PhotoslideComponent } from './photoslide/photoslide.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'nature', component: NatureComponent },
  { path: 'festival', component: FestivalComponent },
  { path: 'seasons', component: SeasonsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'photoslide', component: PhotoslideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
