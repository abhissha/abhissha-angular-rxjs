import { Component } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { } from 'rxjs/operators';

@Component({
  selector: 'behavior-subject-example',
  template: `
    <a href="https://brianflove.com/2018/03/04/rxjs-the-basics/">Source</a>
  <br />
  <br />
  <button (click)="startBehaviorSubject()">Start</button>`,
  styles: ['']
})
export class BehaviorSubjectExampleComponent  {

  startBehaviorSubject(): void {
    /* create an instance of BehaviorSubject. */
    const s = new BehaviorSubject<number>(0);

    /* Subscribe to subject. */
    s.subscribe(
      next => console.log("observer1:", next),
      error => console.warn(error),
      () => console.log("observer1 complete")
    );

    /* Emit some values. */
    s.next(1);
    s.next(2);
    s.next(3);
    //s.complete();

    /* Subscribe late to subject. */
    s.subscribe(
      next => console.log("observer 2:", next),
      error => console.warn(error),
      () => console.log("observer2 complete")
    );

    s.complete();
  }
}
