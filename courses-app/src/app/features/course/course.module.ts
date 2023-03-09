import { NgModule } from "@angular/core";

import { CourseComponent } from "./course.component";
import { CourseRoutingModule } from "./course-routing.module";

@NgModule({
  imports: [CourseRoutingModule],
  declarations: [CourseComponent],
  exports: [CourseComponent]
})
export class CourseModule {}
