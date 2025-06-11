import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { LottieComponent } from 'ngx-lottie';

import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';




@Component({
  selector: 'app-hrm',
  imports: [LottieComponent],
  templateUrl: './hrm.component.html',
  styleUrls: ['./hrm.component.css', '../../../css/style.css']
})
export class HrmComponent implements AfterViewInit, OnInit {
  isBrowser = false;
  @ViewChildren('scrollBox') scrollBoxes!: QueryList<ElementRef>;
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


    this.title.setTitle('ProjexERP Human Resource Management (HRM) Service');
    this.meta.updateTag({
      name: 'description',
      content: 'ProjexERP Human Resource Management (HRM) Service'
    });

  }
  options: AnimationOptions = {
    path: 'assets/hrm.json',
    loop: true,
    autoplay: true,
  }
  ngAfterViewInit(): void {
     if (this.isBrowser && this.scrollBoxes) {
      jQuery(document).ready(() => {
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

    
      
      this.scrollBoxes.forEach((slider) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                console.log('Box is in view');
                entry.target.classList.add('animatedslider');
                observer.unobserve(entry.target);
              }
            

            });
          },
          { threshold: 0.2 }
          
        );

        observer.observe(slider.nativeElement);
        
      });
    }


  }
  registration(){
    window.location.href=window.location.origin+"/projex/registration.aspx";
  } 
  
}

