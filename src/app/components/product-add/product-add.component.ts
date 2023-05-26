import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  constructor (private fb:FormBuilder,
    private productService:ProductService,
    private router:Router ){
  }
  productForm = this.fb.group({
    name: [''],
    price:0
  })

  onAdd(){
    const product:IProduct={
      name:this.productForm.value.name ||'',
      price: this.productForm.value.price || 0
    }
    this.productService.addProduct(product).subscribe(data=>{
      this.router.navigate(['products'])
    })
  }
}
