import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getStocks(): Observable<any> {
    return this.http.get("http://localhost:8082/api/stocks")
  }
  getStock(id: number): Observable<any> {
    return this.http.get("http://localhost:8082/api/stocks/"+id)
  }
}






