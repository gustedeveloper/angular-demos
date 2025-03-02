import { Pipe, PipeTransform } from '@angular/core';
import { MemberEntity } from '../model/model';

@Pipe({
  name: 'searchByLogin',
  standalone: true,
})
export class SearchByLoginPipe implements PipeTransform {
  transform(members: MemberEntity[], value: string): MemberEntity[] {
    return members.filter((member) =>
      member.login.toLowerCase().includes(value.toLowerCase())
    );
  }
}
