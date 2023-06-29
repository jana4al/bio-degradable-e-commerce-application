import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoUserSectionComponent } from './logo-user-section.component';

describe('LogoUserSectionComponent', () => {
  let component: LogoUserSectionComponent;
  let fixture: ComponentFixture<LogoUserSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoUserSectionComponent]
    });
    fixture = TestBed.createComponent(LogoUserSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
