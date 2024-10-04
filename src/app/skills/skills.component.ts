import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  images = [
    {
      url: "assets/img/skills/spring.png",
      name: 'Spring Boot',
     },
     {
      url: "assets/img/skills/angular.png",
      name: 'Angular',
     },
     {
      url: "assets/img/skills/hibernate.png",
      name: 'Hibernate',
     },
     {
      url: "assets/img/skills/mysql.png",
      name: 'MySQL',
     },
     {
      url: "assets/img/skills/terraform.png",
      name: 'Terraform',
     },
     {
      url: "assets/img/skills/docker.png",
      name: 'Docker',
     },
     {
      url: "assets/img/skills/maven.png",
      name: 'Maven',
     },
     {
      url: "assets/img/skills/jenkins.png",
      name: 'Jenkins',
     },
     {
      url: "assets/img/skills/gitlab.png",
      name: 'GitLab',
     },
     {
      url: "assets/img/skills/github.png",
      name: 'GitHub',
     },
  ];


  ngOnInit(): void {
   
  }


}
