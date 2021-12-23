import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';
import { Stock } from '../stock/stock.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editstock',
  templateUrl: './editstock.component.html',
  styleUrls: ['./editstock.component.scss']
})
export class EditstockComponent implements OnInit {

  stock: Stock = {
    name: '',
    description: '',
    ceo: '',
    netWorth: '',
    stock: 0,
    website: '',
    id: 0
  }

  constructor(private route:ActivatedRoute,
    private stockService: StockService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const myid = +params['id'];
      this.stockService.getStock(myid).subscribe(payload => {
        this.stock = payload;
        console.log("edit stock payload", payload)
      })
    })
  }

}
