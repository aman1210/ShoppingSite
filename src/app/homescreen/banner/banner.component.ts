import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banners',[
      transition('void => *',[
        style({opacity:0}),
        animate('1000ms',style({opacity:1}))
      ]),
    ])
  ]
})
export class BannerComponent implements OnInit {
  images = [
    "../../../assets/banner.jpg",
    "../../../assets/banner2.jpg",
    "../../../assets/banner3.jpg",
  ]

  count = 0;
  timer;
  constructor() { }

  ngOnInit(): void {
    this.manageTimer();
  }

  manageTimer(){
    this.timer = setInterval(()=>{
      this.onForward();
  },5000);
  }

  onForward(){
    clearInterval(this.timer);
    this.manageTimer();
    const next = this.count+1;
    this.count = next == this.images.length+1?1:next;
  }

  onBack(){
    clearInterval(this.timer);
    this.manageTimer();
    const prev = this.count-1;
    this.count = prev <= 0?this.images.length:prev;
  }


}
