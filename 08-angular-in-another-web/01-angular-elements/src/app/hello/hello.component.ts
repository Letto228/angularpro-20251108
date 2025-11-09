import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HelloComponent {
  readonly count = signal(0);

  @Input() name = '';

  @Output() readonly nameSubmit = new EventEmitter<string>();

  constructor() {
    setInterval(() => {
      this.count.update(value => value + 1);
    }, 1000);
  }
}
