import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddProductComponent } from './product-add-product.component';

describe('ProductAddProductComponent', () => {
  let component: ProductAddProductComponent;
  let fixture: ComponentFixture<ProductAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
