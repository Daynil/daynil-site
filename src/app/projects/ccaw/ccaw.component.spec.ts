import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcawComponent } from './ccaw.component';

describe('CcawComponent', () => {
  let component: CcawComponent;
  let fixture: ComponentFixture<CcawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
