import { Component, TemplateRef } from '@angular/core';
import { DataService } from './data.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  modal : BsModalRef;
  productList : any = [];
  searchList : any = [];
  productRow : any = [];
  cartList : any = [];
  product : any;
  totalPrice : string = "";
  queryString : string;

  constructor ( private data : DataService,
                private modalService :   BsModalService,
                private filter : FilterPipe,
                ){
        
    this.getData();
  }


  getData(){
    this.data.getData().subscribe((res: any)=>{
      this.productList = res;
      let chunckSize = 3;
        for (let i = 0; i < this.productList.length; i += chunckSize) {
          this.productRow.push(this.productList.slice(i, i + chunckSize));
        };  
    });
  }
  
  searchProduct(){
    let x = this.filter.transform(this.productList,this.queryString, ['product_name'] );
    let chunckSize = 3;
    this.productRow = [];
    for (let i = 0; i < x.length; i += chunckSize) {
      this.productRow.push(x.slice(i, i + chunckSize));
    };  
  }

  showProductDetails(template : TemplateRef<any> , item){
      this.product = item;
      this.modal = this.modalService.show(template);
  }

addToCart(){
    const x = this.product;
    this.totalPrice = (Number(this.totalPrice) + Number(x.price)).toFixed(2);
    this.cartList.push(x);
    console.log(this.cartList);
  }

  removeItem(i){
    this.totalPrice = Number(this.totalPrice) - Number(this.cartList[i].price);
    this.cartList.splice(i,1);
  }

}
