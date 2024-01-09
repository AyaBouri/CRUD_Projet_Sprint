import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AddComponent } from './add/add.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule
  ]
})
export class ProjectsModule { }