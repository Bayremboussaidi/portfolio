import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SideBarComponent } from './core/side-bar.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { SkillsComponent } from './skills/skills.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { faAngular, faAws, faDocker, faGit, faJava, faLinux } from '@fortawesome/free-brands-svg-icons';
import { CertificationComponent } from './certification/certification.component';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    SideBarComponent,
    EducationComponent,
    ExperienceComponent,
    HomeComponent,
    PhoneComponent,
    PortfolioComponent,
    ProjectDetailComponent,
    SkillsComponent,
    CertificationComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule 
  

  ],
  providers: [ provideHttpClient()  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faAngular, faLinux, faAws, faJava, faGit, faDocker);
  }
}
