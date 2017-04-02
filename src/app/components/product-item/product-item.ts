import {Component, Input} from '@angular/core';
import {Product} from 'app/services/product-service';

@Component({
  selector: 'auction-product-item',
  templateUrl: './product-item.html'
})
export class ProductItemComponent {
  @Input() product: Product;
}
