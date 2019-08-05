import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiPocteoComponent } from './hi-pocteo.component';

describe('HiPocteoComponent', () => {
  let component: HiPocteoComponent;
  let fixture: ComponentFixture<HiPocteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiPocteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiPocteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
