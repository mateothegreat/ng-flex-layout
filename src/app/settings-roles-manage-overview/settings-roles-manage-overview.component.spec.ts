import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsRolesManageOverviewComponent } from './settings-roles-manage-overview.component';

describe('SettingsRolesManageOverviewComponent', () => {
  let component: SettingsRolesManageOverviewComponent;
  let fixture: ComponentFixture<SettingsRolesManageOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsRolesManageOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsRolesManageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
