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
  { path: '',  component: HomeComponent },
  { path: 'payroll/index',pathMatch:"full",  component: PayrollComponent },
  { path: 'product/prodandplan', component: ProdandplanComponent },
  {path: 'product/Planandpricing', component : PlanandpricingComponent},
  {path :'manage-account', component:ManageAccountComponent},
  {path : 'hrm', component:HrmComponent},
  {path: 'sale-order-management', component:SaleOrderManagementComponent},
  {path: 'inventory-control-management' , component:InventoryControlManagementComponent},
  {path: 'contactUs', component:ContactUsComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes , { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutes {}
