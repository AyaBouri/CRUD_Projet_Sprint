import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintRoutingModule } from './sprint-routing.module';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    AddComponent,
    UpdateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SprintRoutingModule,
    FormsModule
  ]
})
export class SprintModule { }