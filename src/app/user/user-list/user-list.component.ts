import { Component } from '@angular/core';
import { MemberEntity } from '../../model/model';
import { NgFor } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, HighlightDirective],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  members: MemberEntity[] = [];

  ngOnInit(): void {
    fetch('https://api.github.com/orgs/lemoncode/members')
      .then((response) => response.json())
      .then((result) => (this.members = result));
  }
}
