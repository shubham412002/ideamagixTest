import { Component } from '@angular/core';
import { ScrollServiceService } from '../services/scroll-service.service';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
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
