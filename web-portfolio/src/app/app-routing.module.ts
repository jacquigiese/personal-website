import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { CodePageComponent } from './code-page/code-page.component';
import { VideosPageComponent } from './videos-page/videos-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  { path : 'homepage' , component: HomepageComponent},
  { path: 'photos-page', component: PhotosPageComponent },
  { path: 'code-page', component: CodePageComponent },
  { path: 'videos-page', component: VideosPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
