import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private httpClient:HttpClient) { }

  url="http://localhost:8081/customer-ang";


  public getAllMovie():Observable<any>{
    return this.httpClient.get<any>(this.url);
  }
}
