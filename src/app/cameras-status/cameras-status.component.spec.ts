import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasStatusComponent } from './cameras-status.component';

describe('CamerasStatusComponent', () => {
  let component: CamerasStatusComponent;
  let fixture: ComponentFixture<CamerasStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerasStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
