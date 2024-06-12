import { Component, Inject } from '@angular/core';
import { ScrollServiceService } from '../services/scroll-service.service';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BreadcrumbModule,CommonModule,RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  items = [{ icon: 'pi pi-home', route: '/installation' }, { label: 'Components' }, { label: 'Form' }, { label: 'InputText', route: '/inputtext' }];
  constructor(private scrollService: ScrollServiceService,private route: ActivatedRoute) {}

  handleClick(sectionId: string) {
    this.scrollService.emitSectionId(sectionId);
  }

}
