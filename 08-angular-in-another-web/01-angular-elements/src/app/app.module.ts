import { inject, Injector, NgModule } from '@angular/core';

import { HelloComponent } from './hello/hello.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [BrowserModule]
})
export class AppModule {
  private readonly injector = inject(Injector);

  constructor() {
    const helloComponentElement = createCustomElement(HelloComponent, {injector: this.injector});

    customElements.define('custom-hello', helloComponentElement);
  }

  ngDoBootstrap() {}
}
