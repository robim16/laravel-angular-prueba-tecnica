import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategorias } from './create-categorias';

describe('CreateCategorias', () => {
  let component: CreateCategorias;
  let fixture: ComponentFixture<CreateCategorias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCategorias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCategorias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
