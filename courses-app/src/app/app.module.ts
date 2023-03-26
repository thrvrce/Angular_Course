import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/services/authService/auth.service';
import { AuthorizedGuard } from './auth/guards/authorizedGuard/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/notAuthorizedGuard/not-authorized.guard';
import { AuthInterceptor } from './auth/interceptors/token.interceptor';
import { CoursesService } from './services/courses/courses.service';
import { CoursesStoreService } from './services/coursesStore/courses-store.service';
import { UserService } from './user/service/userService/user.service';
import { UserStoreService } from './user/service/useStore/user-store.service';
import { reducers, effects } from './store';
import { CoursesStateFacade } from './store/courses/courses.facade';
import { CoursesEffects } from './store/courses/courses.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    SharedModule,
    HttpClientModule,
    AuthModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [
    AuthService,
    AuthorizedGuard,
    NotAuthorizedGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    CoursesService,
    CoursesStoreService,
    UserService,
    UserStoreService,
    CoursesStateFacade,
    CoursesEffects
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
