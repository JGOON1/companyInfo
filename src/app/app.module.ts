import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StockComponent } from './stock/stock.component';
import { StocksComponent } from './stocks/stocks.component';
import { EditstockComponent } from './editstock/editstock.component';
import { FormsModule } from '@angular/forms';
import { CreatestockComponent } from './createstock/createstock.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    StocksComponent,
    EditstockComponent,
    CreatestockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
