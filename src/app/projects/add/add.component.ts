import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../Services/projets.service';
import { Projet } from '../Models/projet';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  constructor(private ProjetsService:ProjetsService,private router:Router){
    this.projet=new Projet();
  }
  projet:Projet;
  ngOnInit(): void {
  }
  add(){
    this.ProjetsService.add(this.projet).subscribe({
      next : () =>{
        this.router.navigateByUrl("/projects/list");
      },
      error : () => {},
      complete : () => {}
   });
  }
}