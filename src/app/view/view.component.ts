import { Component, OnInit } from '@angular/core';
import {Movie} from '../view/movie'
import { ViewmovieService } from '../viewmovie.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private viewmovieService:ViewmovieService) { }

  movies:Movie[];
  result:String;

  add(id:number){
    console.log(id);
    this.viewmovieService.add(id).subscribe(res =>this.result = res.error.text);
    // this.result ="Added Successfully"
  }
  
  ngOnInit(): void {
    this.viewmovieService.getAllMovie().subscribe(res=>this.movies=res)
  }

}
