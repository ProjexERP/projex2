import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../css/style.css', '../../../css/animate.css']
})
export class HomeComponent implements OnInit {
  isBrowser = false;
 @ViewChildren('scrollBox') scrollBoxes!: QueryList<ElementRef>;


 constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title) { }

  ngOnInit(): void {
     this.isBrowser = isPlatformBrowser(this.platformId);

    this.title.setTitle('ProjexERP offers online ERP, payroll, and business tools to streamline enterprise operations.');

    this.meta.updateTag({
      name: 'description',
      content: 'Enterprise Resource Planning (ERP) integrates all key business functions—sales, service, inventory, finance—to streamline operations and enhance productivity.'
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
   login(){
    window.location.href=window.location.origin+"/projex/login.aspx";
  }
registration(){
    window.location.href=window.location.origin+"/projex/registration.aspx";
  }
}
