import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasManageLiveFeedComponent } from './cameras-manage-live-feed.component';

describe('CamerasManageLiveFeedComponent', () => {
  let component: CamerasManageLiveFeedComponent;
  let fixture: ComponentFixture<CamerasManageLiveFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerasManageLiveFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasManageLiveFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
