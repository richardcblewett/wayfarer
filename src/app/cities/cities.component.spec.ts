import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import { CitiesComponent } from './cities.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

describe('CitiesComponent', () => {
  let component: CitiesComponent;
  let fixture: ComponentFixture<CitiesComponent>;
  let router:Router
  let location:Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(CitiesComponent);
    router.initialNavigation();
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('navigate to "/2" takes you to london', fakeAsync(() => {
    router.navigate(["cities/2"]).then(() => {
      expect(location.path()).toBe("cities/2");
    });
  }));
});
