import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sprints } from '../Models/sprints';
@Injectable({
  providedIn: 'any'
})
export class SprintsService {
  url:string="https://mani-api.ma/api/Sprints";
  constructor(private httpClient:HttpClient) { }
  add(sprint:Sprints){
    return this.httpClient.post<Sprints>('/api/Sprints',sprint);
  }
  getById(id:number){
    return this.httpClient.get<Sprints>('/api/Sprints/'+id);
  }
  update(sprint:Sprints){
    return this.httpClient.put<Sprints>('/api/Sprints/'+sprint.Id,sprint);
  }
  delete(sprintId:Sprints){
    return this.httpClient.delete<Sprints>('/api/Sprints/'+sprintId);
  }
  getAll(){
    return this.httpClient.get<Sprints[]>('/api/Sprints');
  }
}