import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeComponentComponent } from './practice-component.component';

describe('PracticeComponentComponent', () => {
  let component: PracticeComponentComponent;
  let fixture: ComponentFixture<PracticeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
