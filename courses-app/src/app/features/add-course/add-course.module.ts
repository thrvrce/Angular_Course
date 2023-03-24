import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course.component';
import { AddCourseRoutingModule } from './add-course-routing.module';



@NgModule({
  declarations: [
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    AddCourseRoutingModule
  ]
})
export class AddCourseModule { }
