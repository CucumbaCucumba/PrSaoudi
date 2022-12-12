import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProjectsComponent } from './projects/projects.component';
import { MyServicesComponent } from "./my-services/my-services.component";
import { AlterProjComponent } from "./alter-proj/alter-proj.component";


const routes: Routes = [
  {path:"accueil",component:AcceuilComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"services",component:MyServicesComponent},
  {path:"admin",component:AlterProjComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
