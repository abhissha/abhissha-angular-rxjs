import { Component } from '@angular/core';

import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'async-subject-example',
  template: `
  <a href="https://brianflove.com/2018/03/04/rxjs-the-basics/">Source</a>
  <br />
  <br />
  <button (click)="startSubject()">Start</button>`,
  styles: ['']
})
export class AsyncSubjectExampleComponent  {
  secondElapsed: string;

  startSubject(): void {
    /* create an instance of Subject. */
    const s = new AsyncSubject<number>();

    /* Subscribe to subject. */
    /* create observer 1 */
    s.subscribe(
      next => console.log('observer1: ', next),
      error => console.warn(error),
      () => console.log('observer1 complete')
    );

    /* create observer 2 */
    s.subscribe(
      next => console.log('observer2: ', next),
      error => console.warn(error),
      () => console.log('observer2 complete')
    );

    /* Emit some values. */
    s.next(1);
    s.next(2);

    /* Subscribe late to subject. */
    s.subscribe(
      next => console.log('observer3:', next),
      error => console.warn(error),
      () => console.log('observers3 complete')
    );

    /* Late subscription will now receive Notification. */
    s.next(3);
    s.complete();
  }
}
