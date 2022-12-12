import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { AlterProjComponent } from './alter-proj/alter-proj.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeProjectsAdminComponent } from './liste-projects-admin/liste-projects-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ProjectsComponent,
    ServicesComponent,
    MyServicesComponent,
    AlterProjComponent,
    ListeProjectsAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
