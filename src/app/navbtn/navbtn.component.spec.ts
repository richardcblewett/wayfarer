import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NavbtnComponent } from './navbtn.component';

describe('NavbtnComponent', () => {
  let component: NavbtnComponent;
  let fixture: ComponentFixture<NavbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbtnComponent ],
      imports: [NgbModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbtnComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
