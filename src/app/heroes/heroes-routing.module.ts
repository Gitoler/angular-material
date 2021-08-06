import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'list',
    component: HeroListComponent
  },
  {
    path: 'dashboard',
    component: HeroDashboardComponent
  },
  {
    path: 'list/detail/:id',
    component: HeroDetailComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
