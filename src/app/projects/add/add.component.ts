import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  constructor(private http:HttpClient){
    //this.http.get("https://www.mani-api.ma/api/Projets").subscribe();
  }
  ngOnInit(): void {
  }
}