import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientLinksComponent } from './gradient-links.component';

describe('GradientLinksComponent', () => {
  let component: GradientLinksComponent;
  let fixture: ComponentFixture<GradientLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
