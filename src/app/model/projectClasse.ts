import { Project } from "./project";


export class ProjectClasse implements Project{

    constructor() {   
    }

    id!: number;
    name!: string;
    description!: string;
    imgagePath!: string;

}