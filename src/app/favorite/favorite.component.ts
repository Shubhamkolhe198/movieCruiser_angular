import { Component, OnInit } from '@angular/core';
import { FavoriteServiceService } from '../favorite-service.service';
import {Movie} from '../view/movie'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  public favorite:Movie[];

  constructor(private FavoriteService :FavoriteServiceService) { }

delete(id:number){
  this.FavoriteService.deleteFavorite(id).subscribe(data =>{
    console.log(data);
    this.ngOnInit();
  })
}

  ngOnInit(): void {
    this.FavoriteService.getFavoritesList().subscribe(data =>{
      this.favorite = data;
    })
  }

}
