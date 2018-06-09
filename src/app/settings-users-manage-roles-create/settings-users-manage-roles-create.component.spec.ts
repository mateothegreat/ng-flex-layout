import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUsersManageRolesCreateComponent } from './settings-users-manage-roles-create.component';

describe('SettingsUsersManageRolesCreateComponent', () => {
  let component: SettingsUsersManageRolesCreateComponent;
  let fixture: ComponentFixture<SettingsUsersManageRolesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsUsersManageRolesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsUsersManageRolesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
