import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CitiesComponent } from './cities.component';

describe('CitiesComponent', () => {
  let component: CitiesComponent;
  let name : CitiesComponent[];
  let fixture: ComponentFixture<CitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesComponent ],
      imports: [RouterTestingModule, HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
