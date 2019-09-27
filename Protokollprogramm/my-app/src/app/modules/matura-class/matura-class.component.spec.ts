import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaturaClassComponent } from './matura-class.component';

describe('MaturaClassComponent', () => {
  let component: MaturaClassComponent;
  let fixture: ComponentFixture<MaturaClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaturaClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaturaClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
