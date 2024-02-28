import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() pic:string = '';
  @Input() name:string = '';

  constructor() { }

  ngOnInit() {
  }
navItems =['Home','Tv-shows','News&Popular','My-List','BrowseByLanguage']
}
