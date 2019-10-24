import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './blog/map/map.component';
import { PostComponent } from './blog/post/post.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      LandingComponent,
      AboutComponent,
      PostComponent,
      MapComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      HttpClientModule,
      MarkdownModule.forRoot({ loader: HttpClient })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
