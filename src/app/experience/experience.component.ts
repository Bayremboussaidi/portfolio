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
      title: 'Freiberuflicher Full-Stack Entwickler',
      company: 'Intelligentes Anwesenheitserfassungssystem (Pointage App)',
      date: '2024 - 2025',
      description: 'Entwicklung eines intelligenten Anwesenheitserfassungssystems, das Excel-Dateien (.xlsx) verarbeitet, Anwesenheiten automatisch nach Mitarbeiter-ID sortiert, Ein-/Ausgangsereignisse paart, Gesamtarbeitszeiten berechnet und durchsuchbare Echtzeit-Berichte bereitstellt. Aufbau einer vollständigen CI/CD-Pipeline mit Jenkins, Deployment auf Kubernetes mit ArgoCD und Hosting auf VMware.',
      tools: ['Angular', 'Node.js', 'MySQL', 'Docker', 'Kubernetes', 'Jenkins', 'ArgoCD', 'VMware'],
      github: 'https://github.com/Bayremboussaidi/PointageApp'
    },
    {
      id: '03',
      title: 'Softwareentwickler (Praktikant)',
      company: 'Global Enr - Lac 2, Tunis, Tunesien',
      date: 'Sep 2024 - Jul 2025',
      description: 'Entwicklung von ERPTEST-V-1, einer intelligenten HR-Management-Plattform zur Automatisierung von Mitarbeiterverwaltung, Vertragserfassung, Anwesenheit, KPI-Überwachung und interner Kommunikation. Implementierung von Multi-Rollen-Zugriff, JWT-gesicherten APIs, dynamischen Dashboards, PDF-Vertragserstellung und automatisiertem CSV-Anwesenheitsimport. Integration von Frontend (Angular, PrimeNG) mit Backend (Node.js, Express, MySQL/MongoDB) und Docker-Deployment für skalierbare und sichere Operationen.',
      tools: ['Angular', 'TypeScript', 'PrimeNG', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'JWT', 'Docker', 'pdfkit', 'node-cron', 'multer'],
      github: 'https://github.com/Bayremboussaidi/ERPTEST-V-1.git'
    },
    {
      id: '01',
      title: 'Software Engineer / Freiberuflicher Berater',
      company: 'Myloc Agency - Lac 2, Tunis, Tunesien',
      date: 'Sep 2024 - Jul 2025',
      description: 'Entwicklung einer Full-Stack Autovermietungsplattform mit Multi-Rollen-Zugriff (Admin, Agentur, Kunde, Follower), Unterstützung für Fahrzeugverwaltung, Buchungsgenehmigungen, Echtzeit-Chat, E-Mail-Benachrichtigungen via SMTP, PDF+QR-Bestätigungen und einen KI-Chatbot mit FastAPI, Python und GPT. Implementierung von Keycloak-gesicherten Routen, JWT-Authentifizierung und rollenbasiertem Zugriff.',
      tools: ['Angular', 'Spring Boot', 'GitLab', 'Keycloak', 'MySQL', 'Docker', 'Python', 'FastAPI', 'SMTP', 'GPT'],
      github: 'https://github.com/Bayremboussaidi/PFE-rent.git'
    },
    {
      id: '04',
      title: 'Softwareentwickler (Praktikant)',
      company: 'Global Enr - Lac 2',
      date: 'Juni 2024 - August 2024',
      description: 'Entwicklung einer internen Anwendung mit Angular für das Frontend und Node.js mit Express für das Backend. Implementierung von JWT-Authentifizierung, Containerisierung der Anwendung mit Docker, Push von Images zu Docker Hub und Konfiguration einer CI/CD-Pipeline mit Jenkins, ausgelöst durch GitHub-Commits für automatisierte Builds und Deployments.',
      tools: ['Docker', 'Jenkins', 'React', 'Node.js'],
      github: 'https://github.com/Bayremboussaidi/GLOBAL-ENR-Smart-HR-Reservation.git'
    },
    {
      id: '05',
      title: 'Datenanalyst (Praktikant)',
      company: 'Clenolia France - Tunis',
      date: 'Juli 2022 - August 2022',
      description: 'Erstellung von Python-Web-Scraping-Skripten zur Extraktion und Verarbeitung von Daten aus Log-Dateien auf RedHat-Systemen. Arbeit an der Automatisierung der Datenabfrage und Verbesserung der Datenanalyse-Workflows.',
      tools: ['Python', 'RedHat'],
      github: 'https://github.com/Bayremboussaidi/Web-scraping.git'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
