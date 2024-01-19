
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TitleBoardService {
  private titleSubject = new Subject<string>();
  public title$ = this.titleSubject.asObservable();

  sendData(title: string): void {
    this.titleSubject.next(title);
  }
}