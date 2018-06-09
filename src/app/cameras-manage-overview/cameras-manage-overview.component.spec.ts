import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasManageOverviewComponent } from './cameras-manage-overview.component';

describe('CamerasManageOverviewComponent', () => {
  let component: CamerasManageOverviewComponent;
  let fixture: ComponentFixture<CamerasManageOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerasManageOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasManageOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
