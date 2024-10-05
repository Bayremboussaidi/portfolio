import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences = [
   
    {
      id: '01',
      title: 'Software Develop (Intern)',
      company: 'Global Enr - Misfat',
      date: 'juin 2024 - Aout 2024',
      description: 'Developed an intern application using Angular for the front-end and Node.js with Express for the back-end, implemented JWT for secure authentication and authorization, containerized the application using Docker and pushed images to Docker Hub, and set up a CI/CD pipeline with Jenkins triggered by GitHub commits for automated building and deployment.',
      tools: ['Docker', 'Jenkins', 'react' , 'node']
    },
    {
      id: '02',
      title: 'data analyst (Intern)',
      company: 'clenolia - france',
      date: 'July 2022 - August 2022',
      description: 'Developed python web scraping scripts to extract data from log files .',
      tools: ['python']
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
