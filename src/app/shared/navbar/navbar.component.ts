import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event: any) {

  //   this.startPosition = event.srcElement.scrollTop;
  //   let scroll = event.srcElement.scrollTop;

  //   if (scroll > this.currentPosition) {
  //     console.log('scrollDown');
  //   } else {
  //     console.log('scrollUp');
  //   }

  //   this.currentPosition = scroll;


  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     const output = document.getElementById("navbar");
  //     if (output) output.style.top = "100vh";
  //   } else {
  //     const output = document.getElementById("navbar");
  //     if (output) output.style.top = "0";
  //   }
  // }

  constructor() { }

  currentPosition: any;
  startPosition: number = 0;
  private scrollChangeCallback!: () => void;


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.scrollChangeCallback = () => this.onContentScrolled(event);
    window.addEventListener('scroll', this.scrollChangeCallback, true);
  }


  onContentScrolled(event: any) {
    this.startPosition = event.srcElement.scrollTop;
    let scroll = event.currentTarget.pageYOffset;
    const nav = document.querySelector(".navbar");
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      nav?.classList.add("navbar-scrolled");
    }else{
      nav?.classList.remove("navbar-scrolled");
    }

    // if (scroll > this.currentPosition) {
    //   // nav?.classList.add("navbar--hidden");
    //   nav?.classList.add("navbar--show");
    // } else {
    //   // nav?.classList.remove("navbar--hidden");
    //   nav?.classList.remove("navbar--show");
    // }
    this.currentPosition = scroll;

  }

}
