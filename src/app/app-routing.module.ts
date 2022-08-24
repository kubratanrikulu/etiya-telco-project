import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressInfoComponent } from './shared/pages/address-info/address-info.component';
import { CreateCustomerComponent } from './shared/pages/create-customer/create-customer.component';
import { ShowcaseComponent } from './shared/pages/showcase/showcase.component';

const routes: Routes = [
  {path:'showcase',component:ShowcaseComponent},
  {path:'create-customer',component:CreateCustomerComponent},
  {path:'address-info',component:AddressInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }