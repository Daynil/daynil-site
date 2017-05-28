import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisAppComponent } from './this-app.component';

describe('ThisAppComponent', () => {
  let component: ThisAppComponent;
  let fixture: ComponentFixture<ThisAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
