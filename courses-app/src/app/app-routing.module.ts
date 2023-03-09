import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './features/login/login.module'
import { LoginComponent } from './features/login/login.component';
const routes: Routes = [
  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
  {path: 'registration', loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule)},
  {path: 'courses/edit/:id', loadChildren: () => import('./features/edit-course/edit-course.module').then(m => m.EditCourseModule)},
  {path: 'courses/add', loadChildren: () => import('./features/add-course/add-course.module').then(m => m.AddCourseModule)},
  {path: 'courses/:id', loadChildren: () => import('./features/course/course.module').then(m => m.CourseModule)},
  {path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)},
  {path: '**', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
