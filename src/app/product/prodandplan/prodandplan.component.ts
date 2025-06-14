import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  AfterViewInit,
  ViewChildren,
  QueryList
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-prodandplan',
  templateUrl: './prodandplan.component.html',
  styleUrls: ['./prodandplan.component.css', '../../../css/style.css']
})
export class ProdandplanComponent implements OnInit, AfterViewInit {
  isBrowser = false;
 scrollToKnowMore() {
    const el = document.getElementById('showDetails');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  @ViewChildren('scrollBox') scrollBoxes!: QueryList<ElementRef>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.title.setTitle('Products & Packages');
    this.meta.updateTag({
      name: 'description',
      content: 'Sample product description.'
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
}
