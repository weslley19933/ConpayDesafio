import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutodetalhesComponent } from './produtodetalhes.component';

describe('ProdutodetalhesComponent', () => {
  let component: ProdutodetalhesComponent;
  let fixture: ComponentFixture<ProdutodetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutodetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutodetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
