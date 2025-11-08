import { AfterViewChecked, ChangeDetectorRef, Component, inject, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'check-no-changes';
  counter = 0;

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly ngZone = inject(NgZone);

  constructor() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.counter += 1;
        console.log('Increment: ', this.counter);
      }, 1000)
    })

    // d3.listener(() => {
    //    this.ngZone.run(() => {this.counter += 1});
    // })
  }

  ngAfterViewChecked(): void {
    // setTimeout(() => {
    //   this.counter += 1;
    // });

    // this.counter += 1;

    // this.changeDetectorRef.detectChanges();
    
    console.log('Increment (Actual): ', this.counter);
  }

  onLogCounter() {
    console.log('Log by click: ', this.counter);
  }
}
