import { Routes } from '@angular/router';
import { EmptyComponent } from './empty.component';
import { BadPracticeComponent } from './rxjs/badpractice/bad-practice.component';
import { BestPracticeComponent } from './rxjs/bestpractice/best-practice.component';
import { SubjectExampleComponent } from './rxjs/subject/subject-example.component';
import { AsyncSubjectExampleComponent } from './rxjs/asyncsubject/async-subject-example.component';
import { BehaviorSubjectExampleComponent } from './rxjs/behaviorsubject/behavior-subject-example.component';
import { ReplaySubjectExampleComponent } from './rxjs/replaysubject/replay-subject-example.component';


export const routes: Routes = [
  { path: '', redirectTo: '/empty', pathMatch: 'full' }, 
  { path: 'subjectexample', component: SubjectExampleComponent },
  { path: 'asyncsubjectexample', component: AsyncSubjectExampleComponent },
  { path: 'behaviorsubject', component: BehaviorSubjectExampleComponent },
  { path: 'replaysubject', component: ReplaySubjectExampleComponent },
  { path: 'badpractice', component: BadPracticeComponent },
  { path: 'bestpractice', component: BestPracticeComponent },  
  { path: 'empty', component: EmptyComponent },
]
