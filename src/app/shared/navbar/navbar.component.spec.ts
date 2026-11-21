import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose all expected portfolio section nav items', () => {
    const ids = component.navItems.map((item) => item.id);
    expect(ids).toEqual(['header', 'about', 'skills', 'experience', 'education', 'contact']);
  });

  it('should toggle and close mobile navigation collapse state', () => {
    expect(component.isCollapse).toBeFalse();
    component.onCollapseMobile();
    expect(component.isCollapse).toBeTrue();
    component.hideCollapseToggler();
    expect(component.isCollapse).toBeFalse();
  });

  it('should close mobile menu on Escape key', () => {
    component.isCollapse = true;
    component.onEscapeKey();
    expect(component.isCollapse).toBeFalse();
  });
});
