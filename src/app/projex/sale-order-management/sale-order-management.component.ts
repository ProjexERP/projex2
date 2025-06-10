import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sale-order-management',
  imports: [],
  templateUrl: './sale-order-management.component.html',
  styleUrl: './sale-order-management.component.css'
})
export class SaleOrderManagementComponent implements OnInit {
  isBrowser = false;
  @ViewChildren('scrollBox') scrollBoxes!: QueryList<ElementRef>;
 constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title) { }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.title.setTitle('ProjexERP - Sales Ordering');
    this.meta.updateTag({
      name: 'description',
      content: 'ProjexERP - Sales Ordering'
    });

  }
   ngAfterViewInit(): void {
    if (this.isBrowser && this.scrollBoxes) {
      this.scrollBoxes.forEach((box) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                console.log('Box is in view');
                entry.target.classList.add('animatedbox');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2 }
        );

        observer.observe(box.nativeElement);
      });
    }
  }
  registration(){
    window.location.href=window.location.origin+"/projex/registration.aspx";
  } 
}
