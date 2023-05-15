import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit{
  
  movie: Movie ={
    id:0,
    title:"",
    description:"",
    image:""
  };

  movies:any;
  isEditing: boolean = false;
  
  constructor(private moviesService:MoviesService, private route: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params; 
    if(params["id"]){
      this.moviesService.getMovie(params["id"]).subscribe({
        error: (e) => console.error(e),
        next: (v) => {
          this.movies = v;
          this.movie = this.movies[0];     
          this.isEditing = true; 
        }
      });
    }
  }

  submitMovie(){
    delete this.movie.id;
    delete this.movie.created_at;

    this.moviesService.saveMovie(this.movie).subscribe({
      error: (e) => console.error(e),
      next: (v) => {
        console.log(v); 
        this.route.navigate(["/movies"])
      }
    });
  }

  editMovie(){
    if(this.movie.id != undefined){
      delete this.movie.created_at;
      this.moviesService.updateMovie(this.movie.id,this.movie).subscribe({
        error: (e) => console.error(e),
        next: (v) => {
          console.log(v); 
          this.route.navigate(["/movies"])
        }
      })
    }
   
  }
}
