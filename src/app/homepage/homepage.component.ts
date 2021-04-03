import { Component, OnInit, ViewChild,ChangeDetectorRef, } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  carouselBanner: any
data:any
  resetAnim: any;
  withAnim: any;
  // options: { grid: { xs: number; sm: number; md: number; lg: number; all: number; }; load: number; interval: { timing: number; initialDelay: number; }; loop: boolean; touch: boolean; velocity: number; };

constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
   


 
}
slides = [
  {img: "/assets/images/p1.jpg"},
  {img: "/assets/images/p2.jpg"},
  {img: "/assets/images/p3.jpg"},
  {img: "/assets/images/p4.jpg"}
];
slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

addSlide() {
  this.slides.push({img: "http://placehold.it/350x150/777777"})
}

removeSlide() {
  this.slides.length = this.slides.length - 1;
}

slickInit(e:any) {
  console.log('slick initialized');
}

breakpoint(e:any) {
  console.log('breakpoint');
}

afterChange(e:any) {
  console.log('afterChange');
}

beforeChange(e:any) {
  console.log('beforeChange');
}


ngAfterViewInit() {
  
  }
  
}
