import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
ProductList =[{
  name:"banana", price :"1OO"
},
{
  name:"orange", price:"200"
},
{
  name:"apple", price:"350"
},
{
  name:"ananas", price:"400"
}
]

  constructor(){}

  ngOnInit(): void {
    
  }

}
