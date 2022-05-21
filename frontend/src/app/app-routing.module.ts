import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/layout/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, loadChildren: () => import('./pages/showcase/showcase.module').then(m => m.ShowcaseModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
