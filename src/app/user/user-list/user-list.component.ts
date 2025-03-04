import { Component } from '@angular/core';
import { MemberEntity } from '../../model/model';
import { NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import { FormsModule } from '@angular/forms';
import { SearchByLoginPipe } from '../../pipes/search-by-login.pipe';
import { MembersService } from '../../services/members.service';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgFor,
    HighlightDirective,
    FormsModule,
    NgIf,
    SearchByLoginPipe,
    UserEditComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  members: MemberEntity[] = [];
  newMember!: MemberEntity;
  memberSelected!: MemberEntity;

  constructor(private membersService: MembersService) {}

  add(): void {
    this.members.push(this.newMember);
    this.newMember = {
      id: '',
      login: '',
      avatar_url: '',
    };
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
    this.membersService
      .getAll()
      .subscribe((members) => (this.members = members));

    this.newMember = {
      id: '',
      login: '',
      avatar_url: '',
    };
  }

  select(member: MemberEntity): void {
    this.memberSelected = { ...member };
  }

  save(member: MemberEntity) {
    this.members = [...this.members];
    const index = this.members.findIndex((item) => item.id === member.id);
    this.members.splice(index, 1, member);
  }
}
