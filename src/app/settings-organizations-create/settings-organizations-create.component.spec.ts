import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOrganizationsCreateComponent } from './settings-organizations-create.component';

describe('SettingsOrganizationsCreateComponent', () => {
  let component: SettingsOrganizationsCreateComponent;
  let fixture: ComponentFixture<SettingsOrganizationsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsOrganizationsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsOrganizationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
