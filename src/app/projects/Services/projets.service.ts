import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: "any"
})
export class ProjetsService {
  url:string="https://www.mani-api.ma/api/Projets";
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(this.url);
  }
}