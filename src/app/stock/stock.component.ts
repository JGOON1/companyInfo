import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { Stock } from './stock.model';
import { Router } from '@angular/router';

//decorator
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  // @Input() stock: Stock = {
  //   name: '',
  //   description: '',
  //   ceo: '',
  //   netWorth: '',
  //   stock: 0,
  //   website: '',
  //   id: 0
  // }
  stock: Stock = {
      name: '',
      description: '',
      ceo: '',
      netWorth: '',
      stock: 0,
      website: '',
      id: 0
    }

  // @Input() message: String = "";

  


//dependcy injection
  constructor(private route:ActivatedRoute,
    private stockService: StockService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const myid = +params['id'];
      this.stockService.getStock(myid).subscribe(payload => {
        this.stock = payload;
      })
    })
  }

  // method doing routing, call router to take us where we need to with the id
  edit(): void {
    this.router.navigateByUrl(`/stocks/${this.stock.id}/edit`)
  }

  delete(id: number) {
    this.stockService.onDelete(id).subscribe(data => {
      console.log("this is being deleted", data);
      if (data) {
        this.router.navigateByUrl("/stocks")
      }
    })
  }

}
