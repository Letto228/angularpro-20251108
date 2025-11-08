import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { inject, InjectionToken, Injector } from '@angular/core';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function testDI() {
  class Depend {
    name = 'Egor'
  };

  class ClassToken {
    readonly depend = inject(Depend);

    constructor() {
      console.log('Test constructor')
    }
  }

  const factoryToken = new InjectionToken('This factory token');
  const injectionToken = new InjectionToken('This injection token');
  const pseudoToken = new InjectionToken('This pseudo token');

  const parentInjector = Injector.create({
    providers: [Depend],
  });

  const injector = Injector.create({
    parent: parentInjector,
    providers: [
      {
        provide: injectionToken, // token
        useValue: 'Egor',
      },
      {
        provide: pseudoToken,
        useExisting: injectionToken,
      },
      // {
      //   provide: ClassToken, // token
      //   useClass: ClassToken,
      // }
      ClassToken,
      {
        provide: factoryToken,
        // useFactory: () => 'Egor',
        // useFactory: () => inject(pseudoToken),
        // useFactory: () => (new ClassToken()).depend.name,
        useFactory: () => (new ClassToken()),
      }
    ],
  });

  // console.log(injector.get(factoryToken));
  // console.log(injector.get(injectionToken));
  // console.log(injector.get(pseudoToken));
  
  setTimeout(() => {
    console.log(injector.get(ClassToken));
    // console.log(injector.get(factoryToken));
    // console.log(injector.get(factoryToken));
    // console.log(injector.get(factoryToken));
    // console.log(injector.get(factoryToken));
  }, 5000);
}

testDI();
