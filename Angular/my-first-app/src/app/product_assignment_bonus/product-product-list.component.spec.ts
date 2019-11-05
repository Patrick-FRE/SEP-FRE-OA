import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductProductListComponent } from './product-product-list.component';

describe('ProductProductListComponent', () => {
  let component: ProductProductListComponent;
  let fixture: ComponentFixture<ProductProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
