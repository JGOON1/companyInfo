import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../stock.service';
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

  constructor(private stockService: StockService,
    private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.stockService.create(this.newStock).subscribe(data => {
      console.log(data)
      if (data) {
        this.router.navigateByUrl("/stocks")
      }
    })
  }

}
