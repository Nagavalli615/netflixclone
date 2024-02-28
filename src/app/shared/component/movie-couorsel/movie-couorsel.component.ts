import { AfterViewInit, Component, ElementRef, OnInit, ViewChild ,Input} from '@angular/core';
import Swiper from 'swiper';
import { Ivediocontent } from '../../models/vediocontent.interface';

@Component({
  selector: 'app-movie-couorsel',
  templateUrl: './movie-couorsel.component.html',
  styleUrls: ['./movie-couorsel.component.scss']
})
export class MovieCouorselComponent implements OnInit,AfterViewInit {
@Input () title :string;
@Input () vediocontents:Ivediocontent[] = [];
@ViewChild('swiperContainer',null) swiperContainer:ElementRef;

selectedContent:string |null = null;

  constructor() { }
  ngAfterViewInit(): void {
    this.initswiper();
  }

  ngOnInit() {
  }


  private initswiper(){
    return new Swiper (this.swiperContainer.nativeElement,{
      slidesPerView:3,
      slidesPerGroup:2,
      centeredSlides:true,
      loop:true,
      // configuration for based on screenSize
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }

  setHoverMovie(movie:Ivediocontent){
    this.selectedContent = movie.title ? movie.title : movie.name
  }
  clearHoverMovie(){
    this.selectedContent = null;
  }
}

