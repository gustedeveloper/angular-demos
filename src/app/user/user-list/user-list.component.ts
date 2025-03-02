import { Component } from '@angular/core';
import { MemberEntity } from '../../model/model';
import { NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SearchByLoginPipe } from '../../pipes/search-by-login.pipe';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NgFor,
    HighlightDirective,
    FormsModule,
    NgIf,
    SearchByLoginPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  members: MemberEntity[] = [];
  newMember!: MemberEntity;
  memberSelected!: MemberEntity;

  editForm!: FormGroup;
  idControl!: FormControl;
  loginControl!: FormControl;
  avatarControl!: FormControl;

  constructor(
    private membersService: MembersService,
    private fb: FormBuilder
  ) {}

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

    this.createEditForm();
  }

  createEditForm(): void {
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      login: ['', [Validators.required, Validators.minLength(6)]],
      avatar_url: '',
    });

    this.idControl = this.editForm.get('id') as FormControl;
    this.loginControl = this.editForm.get('login') as FormControl;
    this.avatarControl = this.editForm.get('avatar_url') as FormControl;
  }

  select(member: MemberEntity): void {
    this.memberSelected = { ...member };
    this.editForm.patchValue(this.memberSelected);
  }

  handleEditFileInput($event: any): void {
    const files = $event.target.files as FileList;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.avatarControl.setValue(reader.result);
    };
  }

  save(): void {
    if (this.editForm.valid) {
      this.members = [...this.members];
      const member = this.editForm.value;
      const index = this.members.findIndex((item) => item.id === member.id);
      this.members.splice(index, 1, member);
    }
  }
}
