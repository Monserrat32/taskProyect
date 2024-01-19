import { Component, inject, OnInit,SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modals/modal-taks/modal-taks.component';
import {CdkDragDrop,CdkDrag,CdkDropList,CdkDropListGroup,moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
import { ListColumnsService} from '../../services/board-services/list-columns.service';
import { ModalService } from '../../services/modal-services/modal.services';
@Component({
  selector: 'task-dasboard-board-column',
  standalone: true,
  imports: [CommonModule,CdkDropListGroup, CdkDropList, CdkDrag,ModalComponent],
  templateUrl: './board-column.component.html',
  styleUrl: './board-column.component.css',
})
export class BoardColumnComponent implements OnInit{
  private modalService= inject(ModalService);

  public  listColumnsBoard:any;
  public  isModalOpen: boolean = false;
  public  modalData: any;
  public  listStatusBoard:any;

  constructor( private listColumnsService:ListColumnsService ){
        this.modalService.customEvent$.subscribe((event: any) => {
          if (event && event.eventType === 'cambioLista') {
            this.listColumnsService.listColumns$.subscribe(updatedLists => {
              this.listColumnsBoard = updatedLists;
            });
          }
        });
  }
  ngOnInit(): void {
    this.loadListColumns();
    this.listStatusBoard = this.listColumnsBoard.map((column: { title: string }) => column.title);
  }

  public drop(event: CdkDragDrop<string[]>) {
    const destinationColumn = event.container.id;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  
  }


 public  openModal(task: any) {
    this.modalService.changeModalState({
      isOpen: true,
      taskData: task,
      listStatusBoard:this.listStatusBoard
    });
  }

  
  public getSubtaksCompleted(listSubtaks: Array<any>):any{  
    const totalCompleted= listSubtaks.filter(
      (subtaks:any)=>
      subtaks.isCompleted == true
    );
    return totalCompleted.length;
    
  }
  public loadListColumns(): void {
    const storedData = localStorage.getItem('dataListaBoard');
    if (!storedData) {
        this.listColumnsBoard = this.listColumnsService.getAllLists();
        localStorage.setItem('dataListaBoard', JSON.stringify(this.listColumnsBoard));
    } else {
        this.listColumnsBoard = JSON.parse(storedData);
    }
}

}
