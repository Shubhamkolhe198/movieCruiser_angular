import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Movie } from '../view/movie';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminServiceService) { }
  movies:Movie[];
  ngOnInit(): void {
    this.adminService.getAllMovie().subscribe(res=>this.movies = res)

  }

}
