import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies:any = [];
  constructor(private moviesService:MoviesService, private router:Router){ }

  ngOnInit(){
    this.getGames()
  }

  getGames(){
    this.moviesService.getMovies().subscribe({
      error: (e) => console.error(e),
      next: (v) => {
        this.movies = v;
        console.log(this.movies); 
      }
    });
  }


  editMovie(id:string){
    this.router.navigate([`/movies/edit/${id}`]);
  }
  deleteMovie(id:string){
    this.moviesService.deleteMovie(id).subscribe({
      error: (e) => console.error(e),
      next: (v) => {
        console.log(v); 
        this.getGames();
      }
    });
  }
}
