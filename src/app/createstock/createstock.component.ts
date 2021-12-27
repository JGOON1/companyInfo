import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock/stock.model';


@Component({
  selector: 'app-createstock',
  templateUrl: './createstock.component.html',
  styleUrls: ['./createstock.component.scss']
})
export class CreatestockComponent implements OnInit {

  newStock: Stock = {
    name: '',
    description: '',
    ceo: '',
    netWorth: '',
    stock: 0,
    website: '',
    id: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  create(): void {
    
  }

}
