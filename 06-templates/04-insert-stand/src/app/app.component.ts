import { Component, inject, Injector, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DeclaratedComponent } from './declarated/declarated.component';
import { NAME_TOKEN } from './undeclarated/name.token';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: NAME_TOKEN,
      useValue: 'Egor'
    }
  ]
})
export class AppComponent {
  title = 'insert-stand';

  readonly injector = inject(Injector);

  @ViewChild('viewContainer', {static: true, read: ViewContainerRef})
  private container!: ViewContainerRef;

  component$ = from(import('./undeclarated/undeclarated.component').then(m => m.UndeclaratedComponent))

  onClickComponent() {
    // this.container.createComponent(DeclaratedComponent)
    // this.container.createComponent(UndeclaratedComponent)
    import('./undeclarated/undeclarated.component').then(({UndeclaratedComponent}) => {
      const ref = this.container.createComponent(UndeclaratedComponent, {injector: this.injector});

      // ref.setInput('')
    });
  }

  onClickTemplate(template: TemplateRef<unknown>) {
    const ref = this.container.createEmbeddedView(template, {$implicit: 'Default property', name: 'Egor'});
  }

  onClickClear() {
    this.container.clear();
  }

}
