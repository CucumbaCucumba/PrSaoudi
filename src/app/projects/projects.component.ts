import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ServiceWebService} from '../service-web.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private service:ServiceWebService) { }

  projects!: Project[];
  tech :  Array<string> = [];
  i:number=1;
  ngOnInit(){

  this.service.getProjects().subscribe(data=>{ this.projects=data;
    console.log(this.projects)
   
      
    });        
    }
}
