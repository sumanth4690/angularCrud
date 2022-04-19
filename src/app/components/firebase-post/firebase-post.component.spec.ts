import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasePostComponent } from './firebase-post.component';

describe('FirebasePostComponent', () => {
  let component: FirebasePostComponent;
  let fixture: ComponentFixture<FirebasePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebasePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
