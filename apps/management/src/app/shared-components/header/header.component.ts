import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleBoardService} from '../title-board/title.board.service'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public titleSelected:any='';
  constructor(private titleBoardService:TitleBoardService) {
      this.titleBoardService.title$.subscribe((title) => {
              this.titleSelected = title;
      });
  }
}
