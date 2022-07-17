import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EAuctionService {

  constructor(private http: HttpClient) { }


  getBidDetails(productId : String) : Observable<any>{
    return this.http.get<any>("http://localhost:8081/e-auction/api/v1/seller/show-bids/"+productId);
  }

}
