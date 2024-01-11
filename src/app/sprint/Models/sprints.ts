import { Projet } from "src/app/projects/Models/projet";
export class Sprints {
    Id:number=0;
    SprintName:string="";
    SprintGoal:string="";
    DateDebut!:Date|string;
    DateFin!:Date|string;
    Projet:Projet=new Projet();
    ProjetId:number=0;
    /*"UserStories":null*/
}