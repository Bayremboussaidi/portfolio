import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailComponent } from '../project-detail/project-detail.component'; // Ensure this path is correct

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  images = [
    { url: 'assets/img/skills/spring.png', name: 'Spring Boot' },
    { url: '../../assets/img/skills/angular.png', name: 'Angular' },
    { url: '../../assets/img/skills/hibernate.png', name: 'Hibernate' },
    { url: '../../assets/img/skills/mysql.png', name: 'MySQL' },
    { url: '../../assets/img/skills/terraform.png', name: 'Terraform' },
    { url: '../../assets/img/skills/docker.png', name: 'Docker' },
    { url: '../../assets/img/skills/maven.png', name: 'Maven' },
    { url: '../../assets/img/skills/jenkins.png', name: 'Jenkins' },
    { url: '../../assets/img/skills/gitlab.png', name: 'GitLab' },
    { url: '../../assets/img/skills/github.png', name: 'GitHub' },
    { url: '../../assets/img/skills/react.jpeg', name: 'React JS' },
    { url: '../../assets/img/skills/mongo.jpeg', name: 'Mongo DB' },
    { url: '../../assets/img/skills/flutter.PNG', name: 'Flutter' },
    { url: '../../assets/img/skills/scrum.png', name: 'Scrum' },

  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // If using any additional initialization routines
  }

  openDialog(image: any): void {
    const dialogRef = this.dialog.open(ProjectDetailComponent, {
      width: '250px',
      data: image // Pass the selected image data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any needed actions after dialog closes
    });
  }
}