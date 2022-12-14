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
  isCollapse: boolean = false;
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
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      nav?.classList.add("navbar-scrolled");
    } else {
      nav?.classList.remove("navbar-scrolled");
    }

    // if (scroll > this.currentPosition) {
    //   console.log('scrollDown');
    //   // nav?.classList.add("navbar--hidden");
    //   // nav?.classList.add("navbar--show");
    // } else {
    //   console.log('scrollUp');
    //   // nav?.classList.remove("navbar--hidden");
    //   // nav?.classList.remove("navbar--show");
    // }
    this.currentPosition = scroll;

  }


  onCollapseMobile() {
    const nav = document.querySelector(".navbar-collapse");
    nav?.classList.add("navbar-collapse-mobile");
    setTimeout(() => {
      this.isCollapse = true
    }, 300)
  }

  hideCollapseToggler() {
    this.isCollapse = false
    const nav = document.querySelector(".navbar-collapse");
    nav?.classList.remove("navbar-collapse-mobile");
    nav?.classList.remove("show");
  }

}
