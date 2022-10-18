import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementViewComponent } from './user-management-view.component';

describe('UserManagementViewComponent', () => {
  let component: UserManagementViewComponent;
  let fixture: ComponentFixture<UserManagementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
