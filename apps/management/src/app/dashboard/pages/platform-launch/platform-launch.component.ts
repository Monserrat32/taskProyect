import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardColumnComponent } from '../../../shared-components/board-column/board-column.component';
import { ModalComponent } from '../../../shared-components/modals/modal-taks/modal-taks.component';
@Component({
  selector: 'task-dasboard-platform-launch',
  standalone: true,
  imports: [CommonModule,BoardColumnComponent,ModalComponent],
  templateUrl: './platform-launch.component.html',
  styleUrl: './platform-launch.component.css',
})
export default class PlatformLaunchComponent {}
