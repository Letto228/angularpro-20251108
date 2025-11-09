import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  bigPrime = 0;

  // private worker = new Worker(new URL('./find-big-prime.worker', import.meta.url));

  constructor() {
    // setInterval(() => {
    //   this.counter += 1;
    // }, 100);
  }

  // ngOnDestroy(): void {
  //   this.worker.terminate();
  // }

  setBigPrime() {
    // this.bigPrime = findBigPrime();
      
    const worker = new Worker(new URL('./find-big-prime.worker', import.meta.url));

    // worker.onmessage = ({ data }) => {
    //   console.log(`page got message: ${data}`);
    // };

    worker.addEventListener('message', ({data}) => {
      this.bigPrime = data;

      worker.terminate();
    })

    worker.postMessage(null);

    // this.worker.addEventListener('message', ({data}) => {
    //   this.bigPrime = data;
    // })

    // this.worker.postMessage(null);
  }
}
