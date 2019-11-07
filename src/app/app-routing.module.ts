import { EnvUrlPipe } from './helpers/envUrl.pipe';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './blog/map/map.component';
import { PostComponent } from './blog/post/post.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: MapComponent },
  { path: 'blog/post', component: MapComponent },
  { path: 'blog/post/:id', component: PostComponent },
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule,
      EnvUrlPipe
   ],
   declarations: [
     EnvUrlPipe
   ]
})
export class AppRoutingModule { }
