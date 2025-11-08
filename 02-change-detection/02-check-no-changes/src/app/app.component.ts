import { AfterViewChecked, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'check-no-changes';
  counter = 0;

  ngAfterViewChecked(): void {
    this.counter += 1;
    
    console.log('Increment (Actual): ', this.counter);
  }

  onLogTitle() {
    console.log('Log by click: ', this.counter);
  }
}
