import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      imports: [HttpClientModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  describe("post title", ()=>{
    it(' title should be greater than 0', () =>{
      component.post= {title: "Meh"}
      expect(component.post.title.length).toBeGreaterThan(0);
    });
    it(' title should be less than 200 characters', ()=>{
      component.post= {title: "Meh"};
      expect(component.post.title.length).toBeLessThan(200);
    });
  })
  describe("post content", ()=>{
    it("should not be empty", ()=>{
      component.post= {descripton: "La la al la"};
      expect(component.post.description).toBeTruthy;
    });
  })

});
