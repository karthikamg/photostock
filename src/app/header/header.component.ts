import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public showMenu:boolean = false;

  menuOpenClose(event) {
    event.srcElement.parentElement.parentElement.classList.add("slideIn");
    this.showMenu = !this.showMenu;
  } 

  menuClose(event) {
    event.srcElement.parentElement.parentElement.classList.remove("slideIn");
    this.showMenu = false;
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
