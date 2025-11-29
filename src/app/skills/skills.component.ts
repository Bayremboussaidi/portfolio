import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillCategories = [
    {
      title: 'Frontend Entwicklung',
      titleEn: 'Frontend Development',
      skills: [
        { name: 'Angular', icon: 'fab fa-angular', level: 90, color: '#dd0031' },
        { name: 'React JS', icon: 'fab fa-react', level: 75, color: '#61dafb' },
        { name: 'TypeScript', icon: 'fas fa-code', level: 85, color: '#3178c6' },
        { name: 'HTML/CSS', icon: 'fab fa-html5', level: 95, color: '#e34f26' },
        { name: 'Flutter', icon: 'fas fa-mobile-alt', level: 60, color: '#02569b' }
      ]
    },
    {
      title: 'Backend Entwicklung',
      titleEn: 'Backend Development',
      skills: [
        { name: 'Spring Boot', icon: 'fas fa-leaf', level: 85, color: '#6db33f' },
        { name: 'Node.js', icon: 'fab fa-node-js', level: 80, color: '#339933' },
        { name: 'Python', icon: 'fab fa-python', level: 70, color: '#3776ab' },
        { name: 'Hibernate', icon: 'fas fa-database', level: 75, color: '#59666c' }
      ]
    },
    {
      title: 'Datenbanken',
      titleEn: 'Databases',
      skills: [
        { name: 'MySQL', icon: 'fas fa-database', level: 85, color: '#4479a1' },
        { name: 'MongoDB', icon: 'fas fa-leaf', level: 75, color: '#47a248' },
        { name: 'PostgreSQL', icon: 'fas fa-database', level: 70, color: '#336791' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      titleEn: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', icon: 'fab fa-docker', level: 85, color: '#2496ed' },
        { name: 'Kubernetes', icon: 'fas fa-dharmachakra', level: 70, color: '#326ce5' },
        { name: 'Jenkins', icon: 'fab fa-jenkins', level: 80, color: '#d24939' },
        { name: 'GitLab CI/CD', icon: 'fab fa-gitlab', level: 80, color: '#fc6d26' },
        { name: 'Terraform', icon: 'fas fa-cloud', level: 65, color: '#7b42bc' },
        { name: 'AWS', icon: 'fab fa-aws', level: 60, color: '#ff9900' }
      ]
    },
    {
      title: 'Werkzeuge & Methoden',
      titleEn: 'Tools & Methods',
      skills: [
        { name: 'Git/GitHub', icon: 'fab fa-git-alt', level: 90, color: '#f05032' },
        { name: 'Maven', icon: 'fas fa-cogs', level: 80, color: '#c71a36' },
        { name: 'Scrum/Agile', icon: 'fas fa-users', level: 85, color: '#009688' },
        { name: 'Jira', icon: 'fab fa-jira', level: 75, color: '#0052cc' }
      ]
    }
  ];

  // Keep old images for backwards compatibility
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
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(image: any): void {
    const dialogRef = this.dialog.open(ProjectDetailComponent, {
      width: '250px',
      data: image
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
