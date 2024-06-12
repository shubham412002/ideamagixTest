import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hospitals',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './hospitals.component.html',
  styleUrl: './hospitals.component.scss'
})
export class HospitalsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoWidth:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  hospitals = [
    {
      image: './assets/hospital 1.1.jpg',
      name: 'Hospital One',
      location: 'Location One - City'
    },
    {
      image: './assets/hospital 2.1.jpg',
      name: 'Hospital Two',
      location: 'Location Two - City'
    },
    {
      image: './assets/hospital 3.1.jpg',
      name: 'Hospital Three',
      location: 'Location Three - City'
    },
    {
      image: './assets/hospital4.jpg',
      name: 'Hospital Four',
      location: 'Location Four - City'
    },
    {
      image: './assets/hospital5.jpg',
      name: 'Hospital Five',
      location: 'Location Five - City'
    },
    {
      image: './assets/hospital6.jpg',
      name: 'Hospital Six',
      location: 'Location Six - City'
    }
  ];
}
