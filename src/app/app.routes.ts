import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './projex/home/home.component';
import { PayrollComponent } from './projex/payroll/payroll.component';
import { ProdandplanComponent } from './projex/product/prodandplan/prodandplan.component';
import { PlanandpricingComponent } from './projex/product/planandpricing/planandpricing.component';
import { ManageAccountComponent } from './projex/manage-account/manage-account.component';
import { HrmComponent } from './projex/hrm/hrm.component';
import { SaleOrderManagementComponent } from './projex/sale-order-management/sale-order-management.component';
import { InventoryControlManagementComponent } from './projex/inventory-control-management/inventory-control-management.component';
import { ContactUsComponent } from './projex/contact-us/contact-us.component';




export const routes: Routes = [
  { path: 'angular/index',  component: HomeComponent },
  { path: 'angular/payroll/index',pathMatch:"full",  component: PayrollComponent },
  { path: 'angular/product/prodandplan', component: ProdandplanComponent },
  {path: 'angular/product/Planandpricing', component : PlanandpricingComponent},
  {path :'angular/manage-account', component:ManageAccountComponent},
  {path : 'angular/hrm', component:HrmComponent},
  {path: 'angular/sale-order-management', component:SaleOrderManagementComponent},
  {path: 'angular/inventory-control-management' , component:InventoryControlManagementComponent},
  {path: 'angular/contactUs', component:ContactUsComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
