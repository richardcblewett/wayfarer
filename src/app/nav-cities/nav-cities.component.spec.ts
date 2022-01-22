import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCitiesComponent } from './nav-cities.component';

describe('NavCitiesComponent', () => {
  let component: NavCitiesComponent;
  let fixture: ComponentFixture<NavCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
