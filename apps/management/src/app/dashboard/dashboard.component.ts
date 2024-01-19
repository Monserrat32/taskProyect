import { Component ,inject, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToolbarComponent} from '../shared-components/toolbar/toolbar.component';
import { HeaderComponent } from '../shared-components/header/header.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {modeDarkActive} from '../shared-components/theme/actions/actions.actions';
import { Router } from '@angular/router';
import {selectThemeState, selectIsModeThemeDark } from '../shared-components/theme/selector/theme.selector'
@Component({
  selector: 'task-dasboard-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ToolbarComponent,
    HeaderComponent
  ],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export  default class DashboardComponent {
  private store =inject(Store);
  public   darkMode = false;
  public themeSelection$?:Observable<boolean>;
  public showSidebar = true;
  constructor(private router: Router){
   this.themeSelection$ = this.store.select('themeSelection');
  }
  ngOnInit() {

    this.store.select(selectIsModeThemeDark).subscribe((isModeThemeDark) => {
      document.documentElement.setAttribute('selection-theme', isModeThemeDark ? 'theme-aplication-dark' : 'theme-aplication-light');
    });
    this.router.navigate(['/dashboard/plataform']);
  }
  
 public changeThemeAplication():void{
   this.store.dispatch(modeDarkActive());
 }

 public toggleSidebar():void {
  this.showSidebar = !this.showSidebar;
 }
}
