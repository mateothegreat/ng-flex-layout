import { TestBed, inject } from '@angular/core/testing';

import { SettingsRolesService } from './settings-roles.service';

describe('SettingsRolesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsRolesService]
    });
  });

  it('should be created', inject([SettingsRolesService], (service: SettingsRolesService) => {
    expect(service).toBeTruthy();
  }));
});
