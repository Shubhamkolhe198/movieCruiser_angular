import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {
  constructor(private http:HttpClient) { }
  getFavoritesList():Observable<any>{
    return this.http.get<any>("http://localhost:8081/favorite-ang",{
      headers: new HttpHeaders().set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjE1OTE2MjIwLCJleHAiOjE2MTYxNjY1NDh9.zSqfWaixXXCRSL0drIn6Fi5MpeOFCCrUGj42ve-JsPA")
     }
     ).pipe();
   }
  
    deleteFavorite(id:number){
      const deleteUrl = (`http://localhost:8081/delete-ang/${id}`);
      return this.http.delete(deleteUrl,{
        headers: new HttpHeaders().set('Authorization',"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjE1OTE2MjIwLCJleHAiOjE2MTYxNjY1NDh9.zSqfWaixXXCRSL0drIn6Fi5MpeOFCCrUGj42ve-JsPA")
      });
    }
  
  }
