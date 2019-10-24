import { MapComponent } from './../map/map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { PostComponent } from './post.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild()
  ]
})
export class PostModule { }
