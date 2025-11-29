import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      id: '02',
      title: 'Freelance Full-Stack Developer',
      company: 'Smart Attendance Processing System (Pointage App)',
      date: '2024 - 2025',
      description: 'Developed an intelligent attendance tracking system that processes Excel (.xlsx) files, automatically sorts attendance by employee ID, pairs input/output events, calculates total working hours, and provides real-time searchable reports. Built a full CI/CD pipeline using Jenkins, deployed on Kubernetes with ArgoCD, and hosted on VMware.',
      tools: ['Angular', 'Node.js', 'MySQL', 'Docker', 'Kubernetes', 'Jenkins', 'ArgoCD', 'VMware'],
      github: 'https://github.com/Bayremboussaidi/PointageApp'
    },
    {
      id: '03',
      title: 'Software Developer (Intern)',
      company: 'Global Enr - Lac 2, Tunis, Tunisia',
      date: 'Sep 2024 - Jul 2025',
      description: 'Developed ERPTEST-V-1, an intelligent HR management platform to automate employee management, contract tracking, attendance, KPI monitoring, and internal communication. Implemented multi-role access, JWT-secured APIs, dynamic dashboards, PDF contract generation, and automated CSV attendance imports. Integrated frontend (Angular, PrimeNG) with backend (Node.js, Express, MySQL/MongoDB) and Dockerized deployment for scalable and secure operations.',
      tools: ['Angular', 'TypeScript', 'PrimeNG', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'JWT', 'Docker', 'pdfkit', 'node-cron', 'multer'],
      github: 'https://github.com/Bayremboussaidi/ERPTEST-V-1.git'
    },
    {
      id: '01',
      title: 'Software Engineer / Freelance Consultant',
      company: 'Myloc agency - Lac 2, Tunis, Tunisia',
      date: 'Sep 2024 - Jul 2025',
      description: 'Developed a full-stack car rental platform with multi-role access (admin, agency, customer, follower), supporting car management, booking approvals, real-time chat, email notifications via SMTP, PDF+QR confirmations, and an AI chatbot using FastAPI, Python, and GPT. Implemented Keycloak-secured routes, JWT authentication, and role-based access, with future support for online payments and automated workflow notifications.',
      tools: ['Angular', 'Spring Boot', 'GitLab', 'Keycloak', 'MySQL', 'Docker', 'Python', 'FastAPI', 'SMTP', 'GPT'],
      github: 'https://github.com/Bayremboussaidi/PFE-rent.git'
    },
    {
      id: '04',
      title: 'Software Developer (Intern)',
      company: 'Global Enr - Lac 2',
      date: 'June 2024 - August 2024',
      description: 'Developed an internal application using Angular for the front-end and Node.js with Express for the back-end. Implemented JWT authentication, containerized the application using Docker, pushed images to Docker Hub, and configured a CI/CD pipeline using Jenkins triggered by GitHub commits for automated builds and deployments.',
      tools: ['Docker', 'Jenkins', 'React', 'Node.js'],
      github: 'https://github.com/Bayremboussaidi/GLOBAL-ENR-Smart-HR-Reservation.git'
    },
    {
      id: '05',
      title: 'Data Analyst (Intern)',
      company: 'Clenolia France - Tunis',
      date: 'July 2022 - August 2022',
      description: 'Built Python web scraping scripts to extract and process data from log files on RedHat systems. Worked on automating data retrieval and improving data analysis workflows.',
      tools: ['Python', 'RedHat'],
      github: 'https://github.com/Bayremboussaidi/Web-scraping.git'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
