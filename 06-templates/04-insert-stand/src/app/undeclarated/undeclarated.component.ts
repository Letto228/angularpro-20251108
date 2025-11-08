import { Component, InjectionToken, inject } from '@angular/core';

export const NAME_TOKEN = new InjectionToken('Name');

@Component({
  selector: 'app-undeclarated',
  templateUrl: './undeclarated.component.html',
  styleUrls: ['./undeclarated.component.css']
})
export class UndeclaratedComponent {
  readonly name = inject(NAME_TOKEN, {optional: true})
}
