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
      company: 'Global Enr - lac 2 , tunis , tunisia',
      date: 'Sep 2024 - Jul 2025',
      description: 'Full-featured car rental platform with role-based access (admin, agency, customer, follower), enabling car management, chat, email notifications, and PDF+QR generation for rentals. Keycloak-secured routes support user login, online payments, rental validation, and interaction tracking via emails and real-time notifications..',
      tools: ['Angular' , 'Spring Boot', 'gitlab' , 'AWS' , 'terraform' , 'keycloak' , 'MySQL' , 'Docker' ]
    },
    {
      id: '02',
      title: 'Software Develop (Intern)',
      company: 'Global Enr - lac 2',
      date: 'juin 2024 - Aout 2024',
      description: 'Developed an intern application using Angular for the front-end and Node.js with Express for the back-end, implemented JWT for secure authentication and authorization, containerized the application using Docker and pushed images to Docker Hub, and set up a CI/CD pipeline with Jenkins triggered by GitHub commits for automated building and deployment.',
      tools: ['Docker', 'Jenkins', 'react' , 'node']
    },
    {
      id: '03',
      title: 'data analyst (Intern)',
      company: 'clenolia france - tunis',
      date: 'July 2022 - August 2022',
      description: 'Developed python web scraping scripts to extract data from log files , working on redhat machines .',
      tools: ['python' , 'redhat']
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
