import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MovieFormComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
