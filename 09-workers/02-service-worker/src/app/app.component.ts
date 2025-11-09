import { Component, inject } from '@angular/core';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { combineLatest, filter, merge, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-worker';

  constructor() {
    const swUpdate = inject(SwUpdate);

    // swUpdate.versionUpdates.subscribe(console.log);
    // swUpdate.versionUpdates
    //   .pipe(
    //     filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'),
    //   )
    //   .subscribe(event => {
    //     if (confirm('Есть новая версия, хотите перезагрузить страницу?')) {
    //       document.location.reload();
    //     }
    //   });

    // setInterval(() => {
    //   swUpdate.checkForUpdate().then(hasNewVersion => {
    //     if (hasNewVersion && confirm('Есть новая версия, хотите перезагрузить страницу?')) {
    //       document.location.reload();
    //     }
    //   })
    // }, 1000 * 10);

    // timer(1000*10)
    //   .pipe(
    //     filter(Boolean)
    //   )
    //   .subscribe(() => {
    //     if (confirm('Есть новая версия, хотите перезагрузить страницу?')) {
    //       document.location.reload();
    //     }
    //   });

    merge(
      timer(1000*60*60).pipe(
        filter(Boolean)
      ),
      swUpdate.versionUpdates.pipe(
        filter((event): event is VersionReadyEvent => event.type === 'VERSION_READY'),
      )
    ).subscribe(() => {
      if (confirm('Есть новая версия, хотите перезагрузить страницу?')) {
        document.location.reload();
      }
    });

    Notification.requestPermission().then(permissionResult => {
      if (permissionResult === 'granted') {
        console.log('Can show notification');
      }
    })

    const swPush = inject(SwPush);

    // swPush.requestSubscription({serverPublicKey})

    swPush.messages.subscribe(console.log);
  };
}
