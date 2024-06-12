import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { CarouselModule,OwlOptions } from 'ngx-owl-carousel-o';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [ CommonModule,CarouselModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.scss'
})
export class DoctorsComponent{

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

  doctors = [
    {
      image: './assets/pink bg.jpg',
      name: 'Dr. Faique Falke',
      location: 'Musaffah Industrial - Abu Dhabi',
      specialty: 'Doctor Degree & Specialist'
    },
    {
      image: './assets/pink bg.jpg',
      name: 'Dr. Faique Falke',
      location: 'Musaffah Industrial - Abu Dhabi',
      specialty: 'Doctor Degree & Specialist'
    },
    {
      image: './assets/pink bg.jpg',
      name: 'Dr. Faique Falke',
      location: 'Musaffah Industrial - Abu Dhabi',
      specialty: 'Doctor Degree & Specialist'
    }, {
      image: './assets/pink bg.jpg',
      name: 'Dr. Faique Falke',
      location: 'Musaffah Industrial - Abu Dhabi',
      specialty: 'Doctor Degree & Specialist'
    },
    {
      image: './assets/pink bg.jpg',
      name: 'Dr. Faique Falke',
      location: 'Musaffah Industrial - Abu Dhabi',
      specialty: 'Doctor Degree & Specialist'
    },
    {
      image: './assets/pink bg.jpg',
      name: 'Dr. Faique Falke',
      location: 'Musaffah Industrial - Abu Dhabi',
      specialty: 'Doctor Degree & Specialist'
    },
  ];

  // ngAfterViewInit(): void {
  //   (<any>$('.owl-carousel')).owlCarousel({
  //     loop: true,
  //     margin: 10,
  //     nav: true,
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       600: {
  //         items: 2
  //       },
  //       1000: {
  //         items: 3
  //       }
  //     }
  //   });
  // }
}
