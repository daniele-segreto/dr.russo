import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrattamentiComponent } from './trattamenti.component';

describe('TrattamentiComponent', () => {
  let component: TrattamentiComponent;
  let fixture: ComponentFixture<TrattamentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrattamentiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrattamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
