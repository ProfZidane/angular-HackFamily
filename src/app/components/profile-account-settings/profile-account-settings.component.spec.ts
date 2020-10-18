import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAccountSettingsComponent } from './profile-account-settings.component';

describe('ProfileAccountSettingsComponent', () => {
  let component: ProfileAccountSettingsComponent;
  let fixture: ComponentFixture<ProfileAccountSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAccountSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAccountSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
