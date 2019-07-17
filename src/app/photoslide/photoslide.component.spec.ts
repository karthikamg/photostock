import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoslideComponent } from './photoslide.component';

describe('PhotoslideComponent', () => {
  let component: PhotoslideComponent;
  let fixture: ComponentFixture<PhotoslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
