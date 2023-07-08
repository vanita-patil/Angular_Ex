import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products=[
    {pid:'p1',pname:'laptop',price:50000,color:'black',available:'Available',image:'/assets/laptop.jpg'},
    {pid:'p2',pname:'Mobile',price:20000,color:'black',available:'Available',image:'/assets/mobile.jpg'},
    {pid:'p3',pname:'TV',price:30000,color:'black',available:'Not Available',image:'/assets/tv.jpg'},
    {pid:'p4',pname:'Washing Machine',price:20000,color:'black',available:'Available',image:'/assets/machine.jpg'}
  ]  

}
