/*import { Component, OnInit } from '@angular/core';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  projects = [

    {
      id: 0,
      name: 'LocationTN',
      images: ['assets/img/work/loc/1.PNG', 'assets/img/work/loc/2.PNG', 'assets/img/work/loc/3.PNG','assets/img/work/loc/4.PNG','assets/img/work/loc/5.PNG','assets/img/work/loc/6.PNG','assets/img/work/loc/7.PNG','assets/img/work/loc/8.PNG','assets/img/work/loc/9.PNG','assets/img/work/loc/10.PNG'],
      technologies:["Spring Boot 2.7","Thymeleaf","MySQL 5.7"],
      date:"",
      description: "This project involves developing a web application named 'locationTN.' It will be aimed at people looking to rent a car without wasting time, providing all the necessary information to ensure customer satisfaction. On the other hand, this application is also intended for the company's managers to facilitate interaction with customers."
    },{
      id: 1,
      name: 'E-Store',
      images: ['assets/img/work/ecomm/1.png', 'assets/img/work/ecomm/2.png', 'assets/img/work/ecomm/3.png', 'assets/img/work/ecomm/4.png', 'assets/img/work/ecomm/5.png', 'assets/img/work/ecomm/6.png', 'assets/img/work/ecomm/7.png', 'assets/img/work/ecomm/8.png'],
      technologies:["Spring Boot 2.7","Angular 12","MySQL 5.7"],
      date: "De 1 févr. 2022 À 23 févr. 2022",
      description: "This application is intended for clients, administrators, influencers, and advertisers of various brands and shops, to allow them to interact with each other in an automatically organized manner."
    },

  ];

  currentImageIndex: { [key: number]: number } = {};

  ngOnInit(): void {
    this.projects.forEach(project => {
      this.currentImageIndex[project.id] = 0;

      setInterval(() => {
        this.currentImageIndex[project.id] =
          (this.currentImageIndex[project.id] + 1) % project.images.length;
      }, 5000);
    });
  }

  isActiveImage(projectId: number, imageIndex: number): boolean {
    return this.currentImageIndex[projectId] === imageIndex;
  }


  openDialog(project: any): void {
    document.body.classList.add('modal-open');
    this.dialog.open(ProjectDetailComponent, {
      data: { project }
    }).afterClosed().subscribe(() => {
      document.body.classList.remove('modal-open');
    });
  }

}

*/







import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  // Section description for recruiters
  sectionDescription = "A curated collection of my academic and personal projects showcasing full-stack development, cloud infrastructure, and mobile applications. Each project demonstrates hands-on experience with modern technologies and best practices.";

  projects = [
    {
      id: 0,
      name: 'Car Rental Platform (PFE)',
      category: 'Full Stack - Microservices',
      featured: true,
      technologies: ["Angular 16", "Spring Boot", "FastAPI", "MySQL", "Docker", "Kubernetes", "Keycloak", "Stripe", "GitLab CI/CD"],
      description: "A modern full-stack car rental platform with multi-role support (Admin, Agency, Customer). Features JWT & Keycloak authentication, real-time chat, Stripe payment integration, PDF + QR booking confirmations, AI chatbot, and email notifications.",
      keyFeatures: ["Microservices Architecture", "Stripe Payment Integration", "AI Chatbot (FastAPI)", "Keycloak & JWT Security", "Real-Time Chat", "PDF + QR Generation", "Kubernetes Deployment", "GitLab CI/CD Pipeline"],
      codeLink: "https://github.com/Bayremboussaidi/PFE-rent"
    },
    {
      id: 1,
      name: 'Hotel Reservation System',
      category: 'Backend - Spring Boot',
      technologies: ["Spring Boot", "MongoDB", "JWT", "Spring Security"],
      description: "A comprehensive Spring Boot application for managing hotel reservations. Features full CRUD operations, DTOs, JWT authentication, and Spring Security configuration.",
      keyFeatures: ["CRUD Operations", "JWT Authentication", "MongoDB Integration", "RESTful API"],
      codeLink: "https://github.com/Bayremboussaidi/Hotel_Res_SpringBoot.git"
    },
    {
      id: 2,
      name: 'Intranet Management System',
      category: 'Backend - Spring Boot',
      technologies: ["Spring Boot", "MySQL", "Spring Security", "REST API"],
      description: "A comprehensive web application focusing on efficient user, project, and document management functionalities for organizations.",
      keyFeatures: ["User Management", "Project Tracking", "Document Management", "Role-based Access"],
      codeLink: "https://github.com/Bayremboussaidi/intranet_spring.git"
    },
    {
      id: 3,
      name: 'Node.js RESTful API',
      category: 'Backend - Node.js',
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
      description: "A RESTful API application with CRUD operations for users, rooms, and reservations. Features JWT authentication, MongoDB integration, and email notifications.",
      keyFeatures: ["CRUD Operations", "JWT Auth", "Email Notifications", "Docker & GitLab CI/CD"],
      codeLink: "https://github.com/Bayremboussaidi/Node_dev.git"
    },
    {
      id: 4,
      name: 'AWS 3-Tier Architecture',
      category: 'Cloud & Infrastructure',
      technologies: ["Terraform", "AWS", "VPC", "RDS", "Auto Scaling"],
      description: "Infrastructure-as-Code project implementing a highly available 3-tier architecture in AWS using Terraform. Spans 3 availability zones with ALB, ASG, and RDS.",
      keyFeatures: ["High Availability", "Fault Tolerance", "Auto Scaling", "Multi-AZ RDS"],
      codeLink: "https://github.com/Bayremboussaidi/AWS-Terraform-3Tier-Architecture.git"
    },
    {
      id: 5,
      name: 'Angular Frontend Application',
      category: 'Frontend - Angular',
      technologies: ["Angular 16", "TypeScript", "RxJS", "Angular CLI"],
      description: "A modern Angular 16 application demonstrating component-based architecture, routing, and best practices for building scalable frontend applications.",
      keyFeatures: ["Component Architecture", "Routing", "Services", "Responsive Design"],
      codeLink: "https://github.com/Bayremboussaidi/ang14.git"
    },
    {
      id: 6,
      name: 'Coworking Platform - MERN',
      category: 'Full Stack - MERN',
      technologies: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
      description: "A full-stack MERN application for coworking space management with user reservations, room management, and space booking features.",
      keyFeatures: ["Room Reservation", "User Management", "Booking System", "Full Stack Integration"],
      codeLink: "https://github.com/Bayremboussaidi/coworking-MERN.git"
    },
    {
      id: 7,
      name: 'Inventory Management System',
      category: 'Backend - Spring Boot',
      technologies: ["Spring Boot", "MySQL", "Java", "REST API"],
      description: "A complete backend system for stock management. Manages customers, orders, products, and suppliers with MySQL database.",
      keyFeatures: ["Stock Management", "Customer Management", "Order Processing", "Supplier Tracking"],
      codeLink: "https://github.com/Bayremboussaidi/Gestion_de_stock_springboot.git"
    },
    {
      id: 8,
      name: 'Job Board Mobile App',
      category: 'Mobile - Ionic',
      technologies: ["Ionic", "Angular", "TypeScript", "Mobile"],
      description: "A mobile application for job searching and listings built with Ionic framework. Features job browsing, details view, and user-friendly interface.",
      keyFeatures: ["Job Listings", "Job Details", "Responsive UI", "Mobile Optimized"],
      codeLink: "https://github.com/Bayremboussaidi/IONIC_job.git"
    }
  ];

  ngOnInit(): void {
    // Component initialized
  }

  openDialog(project: any): void {
    document.body.classList.add('modal-open');
    this.dialog.open(ProjectDetailComponent, {
      data: { project }
    }).afterClosed().subscribe(() => {
      document.body.classList.remove('modal-open');
    });
  }
}
