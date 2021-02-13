import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreadepagamentoComponent } from './areadepagamento.component';

describe('AreadepagamentoComponent', () => {
  let component: AreadepagamentoComponent;
  let fixture: ComponentFixture<AreadepagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreadepagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreadepagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
