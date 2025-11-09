import { Component, inject } from '@angular/core';
import { NAME_TOKEN } from './name.token';


@Component({
  selector: 'app-undeclarated',
  templateUrl: './undeclarated.component.html',
  styleUrls: ['./undeclarated.component.css']
})
export class UndeclaratedComponent {
  readonly name = inject(NAME_TOKEN, {optional: true})
}
