import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintRoutingModule } from './sprint-routing.module';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AddComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    SprintRoutingModule
  ]
})
export class SprintModule { }
