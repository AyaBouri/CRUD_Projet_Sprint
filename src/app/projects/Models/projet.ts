import { Sprints } from "src/app/sprint/Models/sprints";
export class Projet {
    Id:number=0;
    Libelle:string="";
    Description:string="";
    SprintDays:number=0;
    DateDebut!:Date | string;
    DateFin!:Date | string;
    Sprint:Sprints[]=[];
    /*"Sprints":null;*/
}