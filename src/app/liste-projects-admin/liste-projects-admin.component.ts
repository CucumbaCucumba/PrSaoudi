import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Project } from '../model/project';
import { ProjectClasse } from '../model/projectClasse';
import { ServiceWebService } from '../service-web.service';

@Component({
  selector: 'app-liste-projects-admin',
  templateUrl: './liste-projects-admin.component.html',
  styleUrls: ['./liste-projects-admin.component.css']
})
export class ListeProjectsAdminComponent implements OnInit {

  p = new ProjectClasse;

  Prod = new FormGroup({
  name : new FormControl(''),
  desc : new FormControl(''),
  imgpath : new FormControl(''),
  })

  Prod2 = new FormGroup({
  name : new FormControl(''),
  })

  Prod3 = new FormGroup({
  name : new FormControl(''),
  })
  nomButt :string = "masquer";


  productsF! :Project[];
  products!:Project[]; 
  
  constructor(private service:ServiceWebService) { }



  filter(s:string){
    return this.products.filter(x=>x.name.indexOf(s)!=-1)
  }
  getColor(q:number){
    if(q==0)
      return "red"
      else
      return "black"
    }
  

  toggleIMG()
  {
    if(this.nomButt=="masquer")
      this.nomButt = "afficher"
    else
      this.nomButt = "masquer"  
  }
  deleteprojById(id:number){
    this.service.delProject(id).subscribe(data=>{
      this.service.getProjects().subscribe(data=>{ this.products=data
      this.productsF=this.products}); }); 
  }
 

 


  onSubmitProj(){
   this.p.name = this.Prod.get("name").value
   this.p.description = this.Prod.get("desc").value
   this.p.imgagePath = this.Prod.get("imgpath").value 
   this.p.lang =[this.LangF[parseInt(this.selectedLang)]]
   this.p.soft =[this.SoftF[parseInt(this.selectedSoft)]]
      this.service.addProject(this.p).subscribe(data=>{
        this.service.getProjects().subscribe(data=>{ this.products=data
        this.productsF=this.products});});
   }

   onSubmitLang(){
    this.l.nom = this.Prod2.get("name").value

     this.service.addLang(this.l).subscribe(data=>{
       this.service.getLanguages().subscribe(data=>{ this.Langs=data
       this.LangF=this.Langs});}); 
    }

    onSubmitSoft(){
      this.s.nom = this.Prod3.get("name").value
  
       this.service.addSoft(this.s).subscribe(data=>{
         this.service.getSoft().subscribe(data=>{ this.Softs=data
         this.SoftF=this.Softs});}); 
      }

  

  ngOnInit()
   {
    this.service.getProjects().subscribe(data=>{ this.products=data
      this.productsF=this.products}); 
    this.service.getLanguages().subscribe(data=>{ this.Langs=data
      this.LangF=this.Langs});
      this.service.getSoft().subscribe(data=>{ this.Softs=data
        this.SoftF=this.Softs}); 
   }

}
