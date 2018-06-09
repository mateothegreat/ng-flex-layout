import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUsersManageRolesManageComponent } from './settings-users-manage-roles-manage.component';

describe('SettingsUsersManageRolesManageComponent', () => {
  let component: SettingsUsersManageRolesManageComponent;
  let fixture: ComponentFixture<SettingsUsersManageRolesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsUsersManageRolesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsUsersManageRolesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
