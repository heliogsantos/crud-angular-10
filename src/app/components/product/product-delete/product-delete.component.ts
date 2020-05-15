import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Product } from './../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;
  id = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  deleteProduct(): void {
    this.productService.delete(this.id).subscribe(() => {
      this.productService.showMenssage("Produto deletado com sucesso!");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  getProductById(id: string) {
    this.productService.readById(id).subscribe(product => this.product = product);
  }

  ngOnInit(): void {
    this.getProductById(this.id);
  }
}
