import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '@fe-feature-ui/cart/cart/cart.component';
import { MainLayoutComponent } from './layout/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', loadChildren: () => import('./pages/showcase/showcase.module').then(m => m.ShowcaseModule) },
      { path: 'product', loadChildren: () => import('./pages/product-page/product-page.module').then(m => m.ProductPageModule) },

      { path: '', component: CartComponent, outlet: 'side-bar-outlet' },
    ],
  },
  {
    path: '', component: MainLayoutComponent, children: [
      { path: 'manage', loadChildren: () => import('./pages/manage-product/manage-product.module').then(m => m.ManageProductModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
