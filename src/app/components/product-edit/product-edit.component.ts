import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!:IProduct
  constructor (private fb:FormBuilder,
    private productService:ProductService,
    private route:ActivatedRoute,
    private router:Router ){
      this.route.paramMap.subscribe(param=>{
        const id =param.get('id')
        this.productService.getOne(id).subscribe(product=>{
          this.product = product
          this.productForm.patchValue({
            name: product.name,
            price: product.price
          })
        })
      })
  }
  productForm = this.fb.group({
    name: [''],
    price:0
  })

  onUpdate(){
    const product:IProduct={
      id: this.product.id,
      name:this.productForm.value.name ||'',
      price: this.productForm.value.price || 0
    }
    this.productService.updateProduct(product).subscribe(data=>{
      this.router.navigate(['products'])
    })
  }
}
