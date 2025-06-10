import { Component, Inject, OnInit, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';


// Extend jQuery with viewportChecker method
declare global {
  interface JQuery {
    viewportChecker(options?: any): JQuery;
  }
}

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: [
    './payroll.component.css',
    '../../../css/style.css',
    '../../../css/animate.css'
  ]
})
export class PayrollComponent implements OnInit, AfterViewInit {
  isBrowser = false;
 scrollToKnowMore() {
    const el = document.getElementById('knowMore');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title) { }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);


    this.title.setTitle('ProjexERP Payroll – Say Goodbye to Spreadsheets');
    this.meta.updateTag({
      name: 'description',
      content: 'Experience ProjexERP’s Free Payroll System – Automate onboarding, salary slips, disbursement, compliance, and more. Cloud-based, configurable, and easy to use. Sign up now – it’s fast and free!'
    });

  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      jQuery(document).ready(() => {
        jQuery('.post, .contentpart ul').addClass('hidden').viewportChecker({
          classToAdd: 'visible animated fadeInUp',
          offset: 50

        });

        jQuery('h1').addClass('hidden').viewportChecker({
          classToAdd: 'visible animated bounceInUp',
          offset: 50
        });

        jQuery('.btn-pack').addClass('hidden').viewportChecker({
          classToAdd: 'visible animated rollIn',
          offset: 50
        });

        jQuery('.steps li .panel-heading a').click(function (this: HTMLElement) {
          const icon = jQuery(this).children('span');
          if (icon.hasClass('glyphicon-minus-sign')) {
            icon.removeClass('glyphicon-minus-sign').addClass('glyphicon-plus-sign');
          } else if (jQuery(this).attr('aria-expanded')) {
            icon.removeClass('glyphicon-plus-sign').addClass('glyphicon-minus-sign');
            jQuery(this).parent().parent().siblings()
              .find('a').children('span')
              .removeClass('glyphicon-minus-sign').addClass('glyphicon-plus-sign');
          }
        });

        jQuery('.feature-read-more').on('click', function (this: HTMLElement, e: JQuery.Event) {
          e.preventDefault();
          const $this = jQuery(this);
          const $feature = $this.closest('.feature');
          const isOpen = $feature.hasClass('expanded');

          jQuery('.expanded').removeClass('expanded').find('.feature-read-more').text('More');

          if (isOpen) {
            $feature.removeClass('expanded');
            $this.text('More');
          } else {
            $feature.addClass('expanded');
            $this.text('Less');
          }
        });
      });
    }
  }
   login(){
    window.location.href=window.location.origin+"/projex/login.aspx";
  }
registration(){
    window.location.href=window.location.origin+"/projex/registration.aspx";
  } 
}
