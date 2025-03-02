import { Component } from '@angular/core';
import { MemberEntity } from '../../model/model';
import { NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { FormsModule } from '@angular/forms';
import { SearchByLoginPipe } from '../../pipes/search-by-login.pipe';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, HighlightDirective, FormsModule, NgIf, SearchByLoginPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  members: MemberEntity[] = [];
  newMember!: MemberEntity;

  constructor(private membersService: MembersService) {}

  add(): void {
    this.members.push(this.newMember);
    this.newMember = {
      id: '',
      login: '',
      avatar_url: '',
    };
    console.log(this.members);
  }

  handleFileInput($event: any) {
    const files = $event.target.files as FileList;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.newMember.avatar_url = reader.result as string;
    };
  }

  ngOnInit(): void {
    this.membersService.getAll().then((members) => (this.members = members));

    this.newMember = {
      id: '',
      login: '',
      avatar_url: '',
    };
  }
}
