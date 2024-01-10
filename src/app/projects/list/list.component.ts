import { Component, OnInit } from '@angular/core';
import { Projet } from '../Models/projet';
import { ProjetsService } from '../Services/projets.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  projets:Projet[]=[];
  constructor(private ProjetService:ProjetsService){}
  ngOnInit(): void {
    this.ProjetService.getAll().subscribe({
      next:(data)=>{
        this.projets=data;
      },
      error:()=>{},
      complete:()=>{}
    });
  }
  remove(id:number){
    this.ProjetService
  }
}