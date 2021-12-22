import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { StocksComponent } from './stocks/stocks.component';



const routes: Routes = [
  {path:"stocks", component:StocksComponent},
  {path:"stocks/:id", component:StockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
