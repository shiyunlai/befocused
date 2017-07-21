import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncCardComponent } from './func-card.component';

describe('FuncCardComponent', () => {
  let component: FuncCardComponent;
  let fixture: ComponentFixture<FuncCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
