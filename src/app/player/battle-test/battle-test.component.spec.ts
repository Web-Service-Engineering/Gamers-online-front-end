import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleTestComponent } from './battle-test.component';

describe('BattleTestComponent', () => {
  let component: BattleTestComponent;
  let fixture: ComponentFixture<BattleTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
