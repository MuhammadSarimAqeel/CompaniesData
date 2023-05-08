import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperianHomeComponent } from './experian-home.component';

describe('ExperianHomeComponent', () => {
  let component: ExperianHomeComponent;
  let fixture: ComponentFixture<ExperianHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperianHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperianHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
