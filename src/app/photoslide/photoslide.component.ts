import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photoslide',
  templateUrl: './photoslide.component.html',
  styleUrls: ['./photoslide.component.scss']
})
export class PhotoslideComponent implements OnInit {
  
  slides:any[]=[
    {img: '../../assets/images/slide-show-one.jpg'},
    {img: '../../assets/images/slide-show-two.jpeg'},
    {img: '../../assets/images/slide-show-three.jpg'},
    {img: '../../assets/images/slide-show-four.jpg'},
    {img: '../../assets/images/slide-show-one.jpg'},
    {img: '../../assets/images/slide-show-two.jpeg'},
    {img: '../../assets/images/slide-show-three.jpg'},
    {img: '../../assets/images/slide-show-four.jpg'}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  constructor() { }

  ngOnInit() {
  }

}
