import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { PhotosPageComponent } from './photos-page/photos-page.component';
import { CodePageComponent } from './code-page/code-page.component';
import { VideosPageComponent } from './videos-page/videos-page.component';
import { CodeCanvasComponent } from './code-canvas/code-canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PhotosPageComponent,
    CodePageComponent,
    VideosPageComponent,
    CodeCanvasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
