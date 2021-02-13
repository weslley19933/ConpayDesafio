import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhodecomprasComponent } from './carrinhodecompras.component';

describe('CarrinhodecomprasComponent', () => {
  let component: CarrinhodecomprasComponent;
  let fixture: ComponentFixture<CarrinhodecomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhodecomprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhodecomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
