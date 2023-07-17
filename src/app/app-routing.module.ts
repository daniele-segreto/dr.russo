import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { ChisiamoComponent } from './components/main/chisiamo/chisiamo.component';
import { TrattamentiComponent } from './components/main/trattamenti/trattamenti.component';
import { ContattiComponent } from './components/main/contatti/contatti.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'chisiamo',
    component: ChisiamoComponent
  },
  {
    path: 'trattamenti',
    component: TrattamentiComponent
  },
  {
    path: 'contatti',
    component: ContattiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
