import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasManageSharingComponent } from './cameras-manage-sharing.component';

describe('CamerasManageSharingComponent', () => {
  let component: CamerasManageSharingComponent;
  let fixture: ComponentFixture<CamerasManageSharingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerasManageSharingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasManageSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
