import { Component, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  display_items = false;

  constructor(private renderer: Renderer2,private elem: ElementRef) { }

  ngOnInit(){}

  openNav(){
    let elements = this.elem.nativeElement.querySelectorAll('.sidepanel');
    elements[0].style.width = "300px";
    // console.log('clicked');
  }

  closeNav(){
    let elements = this.elem.nativeElement.querySelectorAll('.sidepanel');
    elements[0].style.width = "0px";
  }
}
