/// <reference types="jquery" />
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Inject, PLATFORM_ID, Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../css/style.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  username: string | null = null;
  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const uname = sessionStorage.getItem('uname');
      if (uname) {
        this.username = uname;
      }
    }
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    $('#moveup').hide();
    $(document).scroll(() => {
      if ($(document).scrollTop() > 300) {
        $('#moveup').show().addClass('animated fadeInUp');
      } else {
        $('#moveup').hide().removeClass('animated fadeInUp');
      }
    });

    $('#back-btn').click(() => {
      this.hideShowMenu('#erp');
    });

    $('.navbar-toggle').on('click', function (this: HTMLElement, e: JQuery.Event) {
      e.preventDefault();
      const targetSelector = $(this).attr('data-target') || $(this).attr('data-bs-target');
      const $target = $(targetSelector);
      $target.collapse('toggle');
    });

    const isMobile = () => window.innerWidth < 768;

    $('#erp').on('click', function (this: HTMLElement, e: JQuery.Event) {
      if (!isMobile()) return;

      e.preventDefault();
      const $menuItem = $(this).closest('.product-menu');
      const $menu = $menuItem.find('.navbar-sub');
      const $icon = $menuItem.find('.dropdown-toggle-icon');

      if ($menuItem.hasClass("clicked")) {
                // Hide current
                $menu.slideUp(200);
                $menuItem.removeClass("clicked");
                $icon.find(".icon-down").show();
                $icon.find(".icon-up").hide();
            } else {
                // Close all
                $(".navbar-sub").slideUp(200);
                $(".product-menu").removeClass("clicked");
                $(".icon-down").show();
                $(".icon-up").hide();

                // Open current
                $menu.slideDown(200);
                $menuItem.addClass("clicked");
                $icon.find(".icon-down").hide();
                $icon.find(".icon-up").show();
            }
    });

     $(".product-menu").hover(
            function (this:HTMLElement) {
                if (!isMobile()) {
                    $(this).find(".navbar-sub").stop(true, true).slideDown(200);
                }
            },
            function (this:HTMLElement) {
                if (!isMobile()) {
                    $(this).find(".navbar-sub").stop(true, true).slideUp(200);
                }
            }
        );
       $(window).on("resize", function () {
            if (!isMobile()) {
                $(".navbar-sub").removeAttr("style");
                $(".product-menu").removeClass("clicked");
                $(".icon-down").show();
                $(".icon-up").hide();
            } else {
                $(".navbar-sub").hide();
                $(".product-menu").removeClass("clicked");
                $(".icon-down").show();
                $(".icon-up").hide();
            }
        });
        
       
    
  }

  hideShowMenu(id: string): void {
    $(id).toggle();
  }

  logout(): void {
    if (this.isBrowser) {
      sessionStorage.removeItem('uname');
      window.location.href = '/logout';
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
     window.location.href=window.location.origin+'/angular/product/Planandpricing';
  }
   hrm(){
     window.location.href=window.location.origin+'/angular/hrm/index';
  }
  faq(){
     window.location.href=window.location.origin+"/projex/faq.aspx";
  }
  contact(){
    window.location.href=window.location.origin+"/angular/contactUs";
  }
   inventory(){
    window.location.href=window.location.origin+"/angular/inventory-control-management/index";
  }
   manageAccount(){
    window.location.href=window.location.origin+"/angular/manage-account";
  }
   salesOrder(){
    window.location.href=window.location.origin+"/angular/sale-order-management/index";
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


}
