import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProductComponent } from './manage-product.component';

const routes: Routes = [
  { path: 'new', component: ManageProductComponent, data: { action: 'create' } },
  { path: ':productId', component: ManageProductComponent, data: { action: 'edit' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageProductRoutingModule {
}
