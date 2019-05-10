import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import * as routes from './routes';
import { EmptyComponent } from './empty.component';
import { BadPracticeComponent } from './rxjs/badpractice/bad-practice.component';
import { BestPracticeComponent } from './rxjs/bestpractice/best-practice.component';
import { SubjectExampleComponent } from './rxjs/subject/subject-example.component';
import { AsyncSubjectExampleComponent } from './rxjs/asyncsubject/async-subject-example.component';
import { BehaviorSubjectExampleComponent } from './rxjs/behaviorsubject/behavior-subject-example.component';
import { ReplaySubjectExampleComponent } from './rxjs/replaysubject/replay-subject-example.component';

@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot(routes.routes) 
  ],
  declarations: 
  [ 
    AppComponent, 
    EmptyComponent,
    BadPracticeComponent,
    BestPracticeComponent,
    SubjectExampleComponent,
    AsyncSubjectExampleComponent,
    BehaviorSubjectExampleComponent,
    ReplaySubjectExampleComponent
  ],
  exports:      
  [     
    EmptyComponent,
    BadPracticeComponent,
    BestPracticeComponent,
    SubjectExampleComponent,
    AsyncSubjectExampleComponent,
    BehaviorSubjectExampleComponent,
    ReplaySubjectExampleComponent,
    RouterModule     
  ],
  bootstrap:    
  [ 
    AppComponent 
  ]
})
export class AppModule { }
