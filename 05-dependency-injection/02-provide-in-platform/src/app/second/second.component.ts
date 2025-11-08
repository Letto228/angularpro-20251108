import { Component, ApplicationRef, NgZone } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
})
export class SecondComponent {
  number = 0;

  constructor(private dataService: DataService, ngZone: NgZone) { 
    this.dataService.data$().subscribe(data => {
      ngZone.run(() => {
        this.number = data;
      })
    });
  }

  down() {
    this.dataService.setData(this.number - 1);
  }

}