import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfeesComponent } from './addfees.component';

describe('AddfeesComponent', () => {
  let component: AddfeesComponent;
  let fixture: ComponentFixture<AddfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
