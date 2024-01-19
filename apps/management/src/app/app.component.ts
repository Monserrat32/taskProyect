import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './shared-components/modals/modal-taks/modal-taks.component';
import { BoardColumnComponent } from './shared-components/board-column/board-column.component';
@Component({
  standalone: true,
  imports: [RouterModule,BoardColumnComponent,ModalComponent],
  selector: 'task-dasboard-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
 
})
export class AppComponent {
 
}
