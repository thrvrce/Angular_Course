import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizedGuard } from './auth/guards/authorizedGuard/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/notAuthorizedGuard/not-authorized.guard';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule), canActivate: [NotAuthorizedGuard]},
  {path: 'registration', loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule), canActivate: [NotAuthorizedGuard]},
  {path: 'courses/edit/:id', loadChildren: () => import('./features/edit-course/edit-course.module').then(m => m.EditCourseModule), canLoad: [AuthorizedGuard]},
  {path: 'courses/add', loadChildren: () => import('./features/add-course/add-course.module').then(m => m.AddCourseModule), canLoad: [AuthorizedGuard]},
  {path: 'courses/:id', loadChildren: () => import('./features/course/course.module').then(m => m.CourseModule), canLoad: [AuthorizedGuard]},
  {path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule), canLoad: [AuthorizedGuard]},
  {path: '**', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
