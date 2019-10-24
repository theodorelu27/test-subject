import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { MapComponent } from './map.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild()
  ]
})
export class MapModule { }
