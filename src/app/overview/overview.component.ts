import { Component } from '@angular/core';
import { ScrollServiceService } from '../services/scroll-service.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  constructor(private scrollService: ScrollServiceService) {}

  ngOnInit() {
    this.scrollService.sectionId$.subscribe(sectionId => {
      this.scrollToSection(sectionId);
    });
  }


  scrollToSection(sectionId: string) {
    const targetElement = document.getElementById(sectionId);
    
    console.log(targetElement)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }
}
