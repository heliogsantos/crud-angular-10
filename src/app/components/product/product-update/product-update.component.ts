import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Product } from './../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: null,
    price: null
  };
  
  constructor(
    private productService: ProductService, 
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { }

  getProductById(id: string) {
    this.productService.readById(id).subscribe(product => this.product = product);
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMenssage("Produto atualizado com sucesso!");
      this.router.navigate(['/products']);
    });
  }

  ngOnInit(): void {
    const getId = () => this.activeRouter.snapshot.paramMap.get('id');
    this.getProductById(getId());
  }
}
