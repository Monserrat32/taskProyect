import { Component,Directive,inject,Input, OnInit,ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService} from '../../../services/modal-services/modal.services';
import { FormsModule } from '@angular/forms';
import {LineThroughTextDirective} from '../../../directives/lineThroughText/line-through-text.directive'
import { ListColumnsService} from '../../../services/board-services/list-columns.service';
@Component({
  selector: 'task-dasboard-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LineThroughTextDirective],
  templateUrl: './modal-taks.component.html',
  styleUrl: './modal-taks.component.css',
})
export class ModalComponent implements OnInit{
 @ViewChild('statusSelect') statusSelect!: ElementRef;
 private modalService= inject(ModalService);
 private listColumnsService = inject(ListColumnsService);
 public  modalOpen: boolean = false;
 public  modalData: any; 
 public listStatusBoard:any;
 
 ngOnInit(): void {

  this.modalService.modalState.subscribe(state=>{
    if (state && state.isOpen) {
      this.modalOpen = true;
      this.modalData = state.taskData;
      this.listStatusBoard= state.listStatusBoard;
    } else {
      this.modalOpen = false;
      this.modalData = null;
    }
  });
 }
 
 public closeModal():void {
  this.modalService.changeModalState({
    isOpen: false,
    taskData: null
  });
  this.emitCustomEvent();
}
public onCheckboxChange(subtask: any):void {
  subtask.isCompleted = !subtask.isCompleted; 
}
public onOpcionSeleccionadaChange(): void {
  this.listColumnsService.emitTaskStatusChanged(this.modalData);
  this.closeModal();
}
emitCustomEvent() {
  this.modalService.emitCustomEvent('cambioLista',true);
}

}