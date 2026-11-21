import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

export interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isCollapse = false;
  activeSection = 'header';

  readonly navItems: ReadonlyArray<NavItem> = [
    { id: 'header', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit(): void {
    this.updateScrollState();
  }

  ngOnDestroy(): void {
    this.isCollapse = false;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollState();
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isCollapse) {
      this.hideCollapseToggler();
    }
  }

  onCollapseMobile(): void {
    this.isCollapse = !this.isCollapse;
  }

  hideCollapseToggler(): void {
    this.isCollapse = false;
  }

  private updateScrollState(): void {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    this.isScrolled = scrollY > 30;
    this.activeSection = this.computeActiveSection(scrollY);
  }

  private computeActiveSection(scrollY: number): string {
    const windowHeight = window.innerHeight || 0;
    const documentHeight = document.documentElement?.scrollHeight || 0;

    if (documentHeight > 0 && scrollY + windowHeight >= documentHeight - 4) {
      return 'contact';
    }

    const probeOffset = scrollY + 140;
    let current = this.navItems[0].id;

    for (const item of this.navItems) {
      const el = document.getElementById(item.id);
      if (el && probeOffset >= el.offsetTop) {
        current = item.id;
      }
    }

    return current;
  }
}
