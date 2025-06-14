import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './/home/home.component';
import { PayrollComponent } from './payroll/payroll.component';
import { ProdandplanComponent } from './product/prodandplan/prodandplan.component';
import { PlanandpricingComponent } from './product/planandpricing/planandpricing.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { HrmComponent } from './hrm/hrm.component';
import { SaleOrderManagementComponent } from './sale-order-management/sale-order-management.component';
import { InventoryControlManagementComponent } from './inventory-control-management/inventory-control-management.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { SelectformNewComponent } from './erp/selectform-new/selectform-new.component';
import { AuthGuard } from './auth.guard';




export const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'payroll/index',pathMatch:"full",  component: PayrollComponent },
  { path: 'product/prodandplan', component: ProdandplanComponent },
  {path: 'product/Planandpricing', component : PlanandpricingComponent},
  {path :'manage-account', component:ManageAccountComponent},
  {path : 'hrm', component:HrmComponent},
  {path: 'sale-order-management', component:SaleOrderManagementComponent},
  {path: 'inventory-control-management' , component:InventoryControlManagementComponent},
  {path: 'contactUs', component:ContactUsComponent},
  {path:'login', component:LoginComponent},
  {path:'erp/selectform-new', component:SelectformNewComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes , { useHash: false }),  BrowserModule, HttpClientModule],
     providers: [provideHttpClient(withFetch())],
  exports: [RouterModule]
})
export class AppRoutes {}
