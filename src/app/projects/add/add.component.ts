import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../Services/projets.service';
import { Projet } from '../Models/projet';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  constructor(private ProjetsService:ProjetsService){
    this.projet=new Projet();
  }
  projet:Projet;
  ngOnInit(): void {
  }
  add(){
    this.ProjetsService.add(this.projet).subscribe();
  }
}