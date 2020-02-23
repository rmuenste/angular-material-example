import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-karusell',
  templateUrl: './my-karusell.component.html',
  styleUrls: ['./my-karusell.component.css']
})
export class MyKarusellComponent implements OnInit {

  imageUrlArray = ['./assets/slide1.jpg', './assets/slide2.jpg', './assets/slide3.jpg', './assets/slide4.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
