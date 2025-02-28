import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Input() ph = 'Buscar...';
  @Input() label = 'Buscar:';

  name = 'Guste';

  @Output() clickEnLupa: EventEmitter<string> = new EventEmitter();
  @Output() otroEvento = new EventEmitter();

  changeName() {
    this.name = 'Guste';
    this.clickEnLupa.emit(this.name);
  }
}
