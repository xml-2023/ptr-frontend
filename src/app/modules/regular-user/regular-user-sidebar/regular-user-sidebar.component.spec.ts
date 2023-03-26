import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularUserSidebarComponent } from './regular-user-sidebar.component';

describe('RegularUserSidebarComponent', () => {
  let component: RegularUserSidebarComponent;
  let fixture: ComponentFixture<RegularUserSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularUserSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularUserSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
