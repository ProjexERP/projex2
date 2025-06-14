import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { LottieComponent } from 'ngx-lottie';
import player from 'lottie-web';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export function playerFactory() {
  return player;
}

@Component({
  selector: 'app-manage-account',
  imports: [LottieComponent],
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css', '../../css/style.css']
})
export class ManageAccountComponent implements OnInit, AfterViewInit {

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


    this.title.setTitle('ProjexERP – Accounting That Works for You.');
    this.meta.updateTag({
      name: 'description',
      content: 'ProjexERP – Accounting That Works for You.'
    });

  }
  
 options: AnimationOptions = {
    path: '/assets/manage-account.json',
    loop: true,
    autoplay: true,
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