import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupactivitiesComponent } from './groupactivities.component';

describe('GroupactivitiesComponent', () => {
  let component: GroupactivitiesComponent;
  let fixture: ComponentFixture<GroupactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupactivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
