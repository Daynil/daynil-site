import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelleyComponent } from './shelley.component';

describe('ShelleyComponent', () => {
  let component: ShelleyComponent;
  let fixture: ComponentFixture<ShelleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
