import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViewmovieService {

  constructor(private httpClient:HttpClient) { }
  url="http://localhost:8080/customer-ang"

  public getAllMovie():Observable<any>{
    return this.httpClient.get<any>(this.url,{
      headers: new HttpHeaders().set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjE1OTYwNzg3LCJleHAiOjE2MTYyMTExMTR9.XKIIZwpKXfBNu1edzCT2Lu8nhP56unh3d0yF6IL_B8M")
     }
     ).pipe();
   }

  public add(id:number){
    return this.httpClient.post<any>(`http://localhost:8081/add-ang/${id}`,{responseType:"json"},{
      headers: new HttpHeaders().set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjE1OTYwNzg3LCJleHAiOjE2MTYyMTExMTR9.XKIIZwpKXfBNu1edzCT2Lu8nhP56unh3d0yF6IL_B8M")
     }
     ).pipe();
   }
  }