import { NgModule } from "@angular/core";

import { RegistrationComponent } from "./registration.component";
import { RegistrationRoutingModule } from "./registration-routing.module";

@NgModule({
  imports: [RegistrationRoutingModule],
  declarations: [RegistrationComponent],
  exports: [RegistrationComponent]
})
export class RegistrationModule {}
