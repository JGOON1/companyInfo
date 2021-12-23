import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { StocksComponent } from './stocks/stocks.component';
// import { EditstockComponent } from './editstock/editstock.component';



const routes: Routes = [
  {path:"stocks", component:StocksComponent},
  {path:"stocks/:id", component:StockComponent},
  // {path:"stocks/:id/edit", component:EditstockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
