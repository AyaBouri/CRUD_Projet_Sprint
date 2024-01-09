import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from '../Models/projet';
@Injectable({
  providedIn: "any"
})
export class ProjetsService {
  url:string="https://www.mani-api.ma/api/Projets";
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(this.url);
  }
  add(projet:Projet){
    return this.http.post(this.url,projet);
  }
}