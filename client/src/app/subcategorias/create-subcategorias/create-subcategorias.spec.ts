import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubcategorias } from './create-subcategorias';

describe('CreateSubcategorias', () => {
  let component: CreateSubcategorias;
  let fixture: ComponentFixture<CreateSubcategorias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSubcategorias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSubcategorias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
