import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inventory-control-management',
  imports: [],
  templateUrl: './inventory-control-management.component.html',
  styleUrl: './inventory-control-management.component.css'
})
export class InventoryControlManagementComponent implements AfterViewInit, OnInit {
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
    private title: Title
  ) {}
 ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);


    this.title.setTitle('ProjexERP - Inventory System');
    this.meta.updateTag({
      name: 'description',
      content: 'ProjexERP - Inventory System'
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
