import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './model/project';


@Injectable({
  providedIn: 'root'
})



export class ServiceWebService {
host="http://localhost:8080/api/"  
  constructor(private http:HttpClient) { }

//GET
  public getProjects():Observable<Project[]>{
    console.log("mmmm")
    return this.http.get<Project[]>(this.host+"Projects")
  }

  public getByIdProject(id:number):Observable<Project>
  {
   return this.http.get<Project>(this.host+"Project/"+id);
  }


  //DELETE

  public delProject(id:number):Observable<void>
  {
   return this.http.delete<void>(this.host+"Project/"+id);
  }

  //POST

  public addProject(project:Project):Observable<void>
  {
   return this.http.post<void>(this.host+"Project",project);
  }


  //PUT

  public alterProject(project:Project):Observable<void>
  {
   return this.http.put<void>(this.host+"Project",project);
  }



}

