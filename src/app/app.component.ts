import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './utils/search/search.component';
import { UserListComponent } from './user/user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    MenuComponent,
    SearchComponent,
    UserListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-demos';

  escribeLog($event: Event) {
    console.log($event);
  }
}
