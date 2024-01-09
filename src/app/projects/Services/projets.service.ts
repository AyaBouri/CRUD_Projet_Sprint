import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get("https://www.mani-api.ma/api/Projets").subscribe();
  }
}