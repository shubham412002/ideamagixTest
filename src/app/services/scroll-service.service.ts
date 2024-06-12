import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {

  constructor() { }

  private sectionIdSource = new Subject<string>();
  sectionId$ = this.sectionIdSource.asObservable();

  emitSectionId(sectionId: string) {
    this.sectionIdSource.next(sectionId);
  }


}
