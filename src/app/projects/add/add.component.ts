import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../Services/projets.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  constructor(private ProjetsService:ProjetsService){
    //this.http.get("https://www.mani-api.ma/api/Projets").subscribe();
  }
  ngOnInit(): void {
    //this.http.get("https://www.mani-api.ma/api/Projets").subscribe();
    this.ProjetsService.getAll().subscribe({
      next : () => {
        alert("Hello!");
      }
    });
  }
}