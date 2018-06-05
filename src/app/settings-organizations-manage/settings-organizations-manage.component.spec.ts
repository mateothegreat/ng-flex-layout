import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOrganizationsManageComponent } from './settings-organizations-manage.component';

describe('SettingsOrganizationsManageComponent', () => {
  let component: SettingsOrganizationsManageComponent;
  let fixture: ComponentFixture<SettingsOrganizationsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsOrganizationsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOrganizationsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
