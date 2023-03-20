import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeescollectionComponent } from './feescollection.component';

describe('FeescollectionComponent', () => {
  let component: FeescollectionComponent;
  let fixture: ComponentFixture<FeescollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeescollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeescollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
