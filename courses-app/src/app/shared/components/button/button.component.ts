import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text = 'Button'
  @Input() iconName = ''
  @Input() withSingleIcon = false
  @Input() type = 'button'

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  get classes () {
    return `app-button ${this.withSingleIcon ? 'app-button__single-icon': ''}`
  }

  get withText () {
    return Boolean(!this.withSingleIcon && this.text)
  }



}
