import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProductService } from './../product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: undefined
  }

  constructor(private productService: ProductService, private router: Router) { }

  createProduct(): void {
    this.productService.create(this.product)
    .subscribe(() => {
        this.productService.showMenssage("Produto criado com sucesso!");
        this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {}

}
