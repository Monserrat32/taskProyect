import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { appRoutes } from '../../app.routes';
import { RouterModule ,Router,ActivatedRoute,NavigationEnd} from '@angular/router';
import { TitleBoardService } from '../title-board/title.board.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent implements OnInit  {
  toolbarTitulo='toolbar-menu';
  constructor( private titleBoardService:TitleBoardService, private router: Router,private activatedRoute: ActivatedRoute){
  }
  ngOnInit() {
   
    this.sendTitle(this.getTitle());
  }
  public kanbanBoards = appRoutes.map((route)=> route.children ?? [])
  .flat()
  .filter((route)=>route && route.path)
  .filter((route)=>!route.path?.includes(':'));

  sendTitle(e:any): void {
    this.titleBoardService.sendData(e);
  }
  private getTitle(): string {
    return 'Plataform Launch'; 
  }
}
