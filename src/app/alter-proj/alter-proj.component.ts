import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectClasse } from '../model/projectClasse';
import { ServiceWebService } from '../service-web.service';

@Component({
  selector: 'app-alter-product',
  templateUrl: './alter-proj.component.html',
  styleUrls: ['./alter-proj.component.css']
})
export class AlterProjComponent  implements OnInit {
  
  id! : number
  p = new ProjectClasse
  Prod = new FormGroup({
  name : new FormControl(''),
  description : new FormControl(''),
  imgPath : new FormControl('')})
 
  onSubmit(){

    console.log(this.p)
    this.service.alterProject(this.p).subscribe(data=>{}); 
     this.r.navigateByUrl('/admin');

    }

  constructor(private service:ServiceWebService, private ar:ActivatedRoute , private r:Router ) { }

  ngOnInit() {
    this.id =this.ar.snapshot.params['id']
    this.service.getByIdProject(this.id).subscribe(data=>{this.p=data
           console.log(this.p)
    });

   
  }

}

