import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasManagePlaybackComponent } from './cameras-manage-playback.component';

describe('CamerasManagePlaybackComponent', () => {
  let component: CamerasManagePlaybackComponent;
  let fixture: ComponentFixture<CamerasManagePlaybackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamerasManagePlaybackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasManagePlaybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
