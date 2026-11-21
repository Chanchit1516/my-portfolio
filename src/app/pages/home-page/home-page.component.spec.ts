import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose categorized skills with visible labels and icon paths', () => {
    expect(component.skillCategories.length).toBe(4);
    for (const category of component.skillCategories) {
      expect(category.items.length).toBeGreaterThan(0);
      for (const item of category.items) {
        expect(item.name.trim().length).toBeGreaterThan(0);
        expect(item.icon).toContain('assets/images/');
      }
    }
  });

  it('should list work experiences with tags', () => {
    expect(component.experiences.length).toBe(4);
    expect(component.experiences[0].company).toBe('IT One');
    for (const exp of component.experiences) {
      expect(exp.tags.length).toBeGreaterThan(0);
    }
  });

  it('should compute a positive integer age', () => {
    const age = component.getAge();
    expect(Number.isInteger(age)).toBeTrue();
    expect(age).toBeGreaterThan(20);
  });

  it('should open external social links safely with noopener,noreferrer', () => {
    const openSpy = spyOn(window, 'open');
    component.linkToSocial('github');
    expect(openSpy).toHaveBeenCalledWith(
      'https://github.com/Chanchit1516',
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('should render semantic heading hierarchy and explicit image alt attributes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('h1').length).toBe(1);
    const images = Array.from(compiled.querySelectorAll('img'));
    expect(images.length).toBeGreaterThan(0);
    for (const img of images) {
      expect(img.hasAttribute('alt')).toBeTrue();
      expect(img.getAttribute('alt')?.trim().length).toBeGreaterThan(0);
    }
  });
});
