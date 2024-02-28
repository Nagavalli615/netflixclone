declare var google:any;
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators'
import { Ivediocontent } from 'src/app/shared/models/vediocontent.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MoviesService } from 'src/app/shared/services/movies.service';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({opacity:0}),
        animate(300,style({opacity:1}))
      ])
    ])
  ]
})
export class BrowseComponent implements OnInit {

  constructor(private auth:AuthService , private movie:MoviesService) { }
  given_name = JSON.parse(sessionStorage.getItem("loggedUserDetails")).given_name
  name = JSON.parse(sessionStorage.getItem("loggedUserDetails")).name;
  picture = JSON.parse(sessionStorage.getItem("loggedUserDetails")).picture;
  email = JSON.parse(sessionStorage.getItem("loggedUserDetails")).email;


 // papularmovie:Ivediocontent[]=[];


  movies: Ivediocontent[] = [];
  tvShows: Ivediocontent[] = [];
  ratedMovies: Ivediocontent[] = [];
  nowPlayingMovies: Ivediocontent[] = [];
  popularMovie: Ivediocontent[] = [];
  topRatedMovies: Ivediocontent[] = [];
  upcomingMovies: Ivediocontent[] = [];


  sources = [
    this.movie.getmovie(),
    this.movie.getTvShows(),
    this.movie.getRatedMovies(),
    this.movie.getNowPlayingMovies(),
    this.movie.getPopularMovies(),
    this.movie.getTopRated(),
    this.movie.getUpcomingMovies()
  ]

  ngOnInit():void {
     this.movie.getmovie().subscribe((res)=>{
      //console.log(res);
      this.movies = res.results;
    })
    this.movie.getTvShows().subscribe((res)=>{
      this.tvShows = res.results;
    })
    this.movie.getRatedMovies().subscribe((res)=>{
      this.ratedMovies = res.results;
    })
    this.movie.getNowPlayingMovies().subscribe((res)=>{
      this.nowPlayingMovies = res.results;
    })
    this.movie.getPopularMovies().subscribe((res)=>{
      this.popularMovie = res.results;
    })
    this.movie.getTopRated().subscribe((res)=>{
      this.topRatedMovies = res.results;
    })
    this.movie.getUpcomingMovies().subscribe((res)=>{
      this.upcomingMovies = res.results;
    })
    // forkJoin(this.sources)
    // .pipe(
    //   map(([movies, tvShows, ratedMovies, nowPlaying, upcoming, popular, topRated])=>{
    //     return {movies, tvShows, ratedMovies, nowPlaying, upcoming, popular, topRated}
    //   })
    // ).subscribe((res:any)=>{
    //   this.movies = res.movies.results as Ivediocontent[];
    //   this.tvShows = res.tvShows.results as Ivediocontent[];
    //   this.ratedMovies = res.ratedMovies.results as Ivediocontent[];
    //   this.nowPlayingMovies = res.nowPlaying.results as Ivediocontent[];
    //   this.upcomingMovies = res.upcoming.results as Ivediocontent[];
    //   this.popularMovie = res.popular.results as Ivediocontent[];
    //   this.topRatedMovies = res.topRated.results as Ivediocontent[];
     
    // })

}
  signout(){
    sessionStorage.removeItem('loggedUserDetails');
    this.auth.signout()
  }
}
