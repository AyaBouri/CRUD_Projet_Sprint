import { Projet } from "src/app/projects/Models/projet";
export class Sprints {
    id:number=0;
    sprintName:string="";
    sprintGoal:string="";
    DateDebut!:Date | string;
    DateFin!:Date | String;
    projet:Projet=new Projet();
}