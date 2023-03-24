import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/shared/shared.module";
import { CoursesComponent } from "./courses.component";
import { CoursesRoutingModule } from "./courses-routing.module";

@NgModule({
  declarations: [CoursesComponent],
  imports: [SharedModule, CoursesRoutingModule],
  exports: [CoursesComponent]
})
export class CoursesModule {}
