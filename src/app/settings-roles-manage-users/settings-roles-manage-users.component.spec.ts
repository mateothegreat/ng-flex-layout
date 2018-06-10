import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsRolesManageUsersComponent } from './settings-roles-manage-users.component';

describe('SettingsRolesManageUsersComponent', () => {
  let component: SettingsRolesManageUsersComponent;
  let fixture: ComponentFixture<SettingsRolesManageUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsRolesManageUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsRolesManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
