import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { Stock } from './stock.model';

//decorator
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @Input() stock: Stock = {
    name: '',
    description: '',
    ceo: '',
    netWorth: '',
    stock: 0,
    website: '',
    id: 0
  }



  constructor(private route:ActivatedRoute,
    private stockService: StockService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const myid = +params['id'];

      this.stockService.getStock(myid).subscribe(payload => {
        this.stock = payload;
      })
    })
  }


}
