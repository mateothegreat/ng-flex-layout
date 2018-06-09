import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasManageSettingsComponent } from './cameras-manage-settings.component';

describe('CamerasManageSettingsComponent', () => {
  let component: CamerasManageSettingsComponent;
  let fixture: ComponentFixture<CamerasManageSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerasManageSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasManageSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
