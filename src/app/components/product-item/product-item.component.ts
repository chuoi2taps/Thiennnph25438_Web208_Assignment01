import { Component,EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'tr[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product:any
  @Input() index:any
  @Output() onRemove: EventEmitter<any> = new EventEmitter
  @Output() onUpdate: EventEmitter<any> = new EventEmitter
  deleteItem(id:any){
    this.onRemove.emit(id)
  }
  updateItem(id:any){
    this.onUpdate.emit(id)
  }
}
