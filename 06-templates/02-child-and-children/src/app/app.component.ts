import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { ZooComponent } from './zoo/zoo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contentchildren-by-service';

  // @ViewChild('zooComponent')
  @ViewChild(ZooComponent)
  private readonly zooComponent: ZooComponent | undefined;
  @ViewChild(ZooComponent, {read: ElementRef})
  private readonly zooElementRef: ElementRef | undefined;
}
