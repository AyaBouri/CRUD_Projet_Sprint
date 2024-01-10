import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetsService } from '../Services/projets.service';
import { Projet } from '../Models/projet';
import { map } from 'rxjs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  constructor(private ActivatesRoute:ActivatedRoute,private ProjetService:ProjetsService,private router:Router){
    this.projet=new Projet();
  }
  projet:Projet;
  ngOnInit(): void {
      let id=this.ActivatesRoute.snapshot.params["id"];
      this.ProjetService.getById(id)
      .pipe(map(p=>{
        p.DateDebut=p.DateDebut.toString().split("T")[0];
        p.DateFin=p.DateFin.toString().split("T")[0];
        return p;
      })
      )
      .subscribe({
        next:(data)=>{
          this.projet=data;
        },
        error:()=>{},
        complete:()=>{},
      });
  }
  update(){
    this.ProjetService.update(this.projet).subscribe({
      next:()=>{
        this.router.navigateByUrl("/projects/list");
      },
      error:()=>{},
      complete:()=>{}
    });
  }
}