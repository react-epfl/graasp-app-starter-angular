import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'teacher', component: TeacherComponent },
      { path: 'student', component: StudentComponent },
      { path: '**', redirectTo: '/student' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
