import { Component, OnInit } from '@angular/core';
import { Sprints } from '../Models/sprints';
import { Router } from '@angular/router';
import { SprintsService } from '../Service/sprints.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  constructor(private sprintService:SprintsService,private router:Router){
    this.sprint=new Sprints;
  }
  sprint:Sprints;
  ngOnInit(): void {
  }
  add(){
    this.sprintService.add(this.sprint).subscribe({
      next:()=>{
        this.router.navigateByUrl("/sprints/list");
      },
      error:()=>{},
      complete:()=>{}
    });
  }
}