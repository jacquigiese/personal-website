import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { CodePageComponent } from './code-page/code-page.component';
import { VideosPageComponent } from './videos-page/videos-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PhotosPageComponent,
    CodePageComponent,
    VideosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
