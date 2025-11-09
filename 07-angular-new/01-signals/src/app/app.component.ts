import { ChangeDetectionStrategy, Component, computed, effect, inject, Injector, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly injector = inject(Injector);

  title = 'signals';

  // count = 0;
  readonly count = signal<number>(0, {equal: (a: number, b: number): boolean => a === b});
  // readonly count = signal<number>(0, {equal: (a: number, b: number): boolean => true});

  readonly doubleCount = computed(() => {
    console.log('Calculated double count');

    return this.count() * 2
  });

  constructor() {
    // console.log(this.count());

    // this.count.set(2);

    // console.log(this.count());

    // this.count.update(value => value + 1);

    // console.log(this.count());

    // this.count.set(this.count() + 1);

    // console.log(this.count());

    setInterval(() => {
      this.count.update(value => value + 1);
      // console.log('Updated: ', this.count());

      // this.count += 1;
      // console.log('Updated: ', this.count);
    }, 1000);

    // ---------------------------------------------

    // console.log(this.doubleCount());
    // console.log(this.doubleCount());
    // console.log(this.doubleCount());

    // this.count.update(value => value + 1);
    // console.log('Updated: ', this.count());

    // console.log(this.doubleCount());
    // console.log(this.doubleCount());
    // console.log(this.doubleCount());
    
    // ---------------------------------------------

    // const showCount = signal(false);
    // const count = signal(0);
    // const conditionalCount = computed(() => {
    //     console.warn('Computed calculated');

    //     return showCount() ? `The count: ${count()}` : `Nothing`;
    // });
    
    // console.log(conditionalCount()); // Deps: showCount | calc
    // console.log(conditionalCount()); // Deps: showCount | no calc
    // console.log(conditionalCount()); // Deps: showCount | no calc
    
    // console.log('Update count');
    // count.update(count => count + 1);
    
    // console.log(conditionalCount()); // Deps: showCount | no calc

    // console.log('Update count');
    // count.update(count => count + 1);
    
    // console.log(conditionalCount()); // Deps: showCount | no calc
    
    // console.log('Update count');
    // count.update(count => count + 1);
    
    // console.log(conditionalCount()); // Deps: showCount | no calc

    // console.log('Show count: true');
    // showCount.set(true);
    
    // console.log(conditionalCount()); // Deps: showCount, count | calc
    // console.log(conditionalCount()); // Deps: showCount, count | no calc
    // console.log(conditionalCount()); // Deps: showCount, count | no calc
    
    // console.log('Update count');
    // count.update(count => count + 1);
    
    // console.log(conditionalCount()); // Deps: showCount, count | calc

    // console.log('Update count');
    // count.update(count => count + 1);

    // console.log(conditionalCount()); // Deps: showCount, count | calc
    
    // console.log('Update count');
    // count.update(count => count + 1);

    // console.log(conditionalCount()); // Deps: showCount, count | calc

    // console.log('Show count: false');
    // showCount.set(false);
    
    // console.log(conditionalCount()); // Deps: showCount | calc
    // console.log(conditionalCount()); // Deps: showCount | no calc
    // console.log(conditionalCount()); // Deps: showCount | no calc
    
    // console.log('Update count');
    // count.update(count => count + 1);
    
    // console.log(conditionalCount()); // Deps: showCount | no calc

    // console.log('Update count');
    // count.update(count => count + 1);

    // console.log(conditionalCount()); // Deps: showCount | no calc
    
    // console.log('Update count');
    // count.update(count => count + 1);

    // console.log(conditionalCount()); // Deps: showCount | no calc

    // ----------------------------------------------------------------

    const effectRef = effect(onCleanup => {
      console.log('Updated by effect: ', this.count());

      const timerId = setTimeout(() => {
        console.error('Counter not incremented');
      }, 2000);

      onCleanup(() => {
        clearTimeout(timerId);
      });
    });

    // setTimeout(() => {
    //   effectRef.destroy();
    // }, 5000);

    // setTimeout(() => {
    //   effect(() => {
    //     console.log('Updated by effect: ', this.count());
    //   }, {injector: this.injector});
    // })
  }
}
