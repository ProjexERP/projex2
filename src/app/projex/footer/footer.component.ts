import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '../../../css/style.css']
})
export class FooterComponent {
 constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const Tawk_API = (window as any).Tawk_API || {};
      const Tawk_LoadStart = new Date();

      const s1 = document.createElement('script');
      s1.async = true;
      s1.src = 'https://embed.tawk.to/5d77999477aa790be33356ca/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');

      const s0 = document.getElementsByTagName('script')[0];
      s0.parentNode?.insertBefore(s1, s0);
    }
  }
  goTopayroll() {
    window.location.href=window.location.origin+'/angular/payroll/index'; // This matches a route path in your app
  }
   index() {
    window.location.href=window.location.origin+'/angular/index'; // This matches a route path in your app
  }
  prodandplan() {
    window.location.href=window.location.origin+'/angular/product/prodandplan' // This matches a route path in your app
  }
  prodandpricing(){
     window.location.href=window.location.origin+'/projex/product/Planandpricing.aspx?planstype=online';
  }
   hrm(){
     window.location.href=window.location.origin+'/projex/hrm/index.aspx';
  }
  faq(){
     window.location.href=window.location.origin+"/projex/faq.aspx";
  }
  contact(){
    window.location.href=window.location.origin+"/projex/contactUs.aspx";
  }
   inventory(){
    window.location.href=window.location.origin+"/projex/inventory-control-management/index.aspx";
  }
   manageAccount(){
    window.location.href=window.location.origin+"/projex/manage-account/index.aspx";
  }
   salesOrder(){
    window.location.href=window.location.origin+"/projex/sale-order-management/index.aspx";
  }
crm(){
    window.location.href=window.location.origin+"/projex/crm/index.aspx";
  }
  login(){
    window.location.href=window.location.origin+"/projex/login.aspx";
  }
registration(){
    window.location.href=window.location.origin+"/projex/registration.aspx";
  }
  help(){
    window.location.href=window.location.origin+"/projex/under_construction.aspx";
  }
  privacy(){
    window.location.href=window.location.origin+"/projex/privacy-policy.aspx";
  }
  terms(){
    window.location.href=window.location.origin+"/projex/terms.aspx";
  }

}


