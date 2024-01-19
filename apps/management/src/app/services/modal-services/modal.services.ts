// modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalStateSubject = new BehaviorSubject<any>(null);
  modalState = this.modalStateSubject.asObservable();

  private customEventSubject = new BehaviorSubject<any>(null);
  customEvent$ = this.customEventSubject.asObservable();

  constructor(){}

  public getModalStateObservable(): Observable<any> {
    return this.modalState;
  }
  public changeModalState(state:any){
     this.modalStateSubject.next(state);
  }
  public emitCustomEvent(eventType: string, eventData: any) {
    this.customEventSubject.next({ eventType, eventData });
  }
}
