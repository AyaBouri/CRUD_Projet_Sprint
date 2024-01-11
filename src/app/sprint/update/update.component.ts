import { Component, OnInit } from '@angular/core';
import { SprintsService } from '../Service/sprints.service';
import { Router } from '@angular/router';
import { Sprints } from '../Models/sprints';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  constructor(private sprintService:SprintsService,private router:Router){
    this.sprint=new Sprints();
  }
  sprint:Sprints;
  ngOnInit(): void {
  }
  update(){
    this.sprintService.update(this.sprint).subscribe({
      next:()=>{
        this.router.navigateByUrl("/sprints/list");
      },
      error:()=>{},
      complete:()=>{}
    });
  }
}