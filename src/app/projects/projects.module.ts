import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AddComponent } from './add/add.component';
import {HttpClientModule} from '@angular/common/http';
import { ProjetsService } from './Services/projets.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
})
export class ProjectsModule { }