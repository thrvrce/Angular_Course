import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchString: string = ''
  @Input() placeholder: string = '';
  @Output() searchEvent = new EventEmitter();

  onSubmit() {
    this.searchEvent.emit(this.searchString)
  }
}

