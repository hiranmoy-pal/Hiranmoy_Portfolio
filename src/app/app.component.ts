import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hiranmoy_Portfolio';
  pdfUrl: any = 'assets/pdf/CV_Hiranmoy.pdf';
  blobUrl: any;
  a: any;
  aboutOpen: boolean = false;
  servicesOpen: boolean = false;
  skillsOpen: boolean = false;
  educationOpen: boolean = false;
  certificationOpen: boolean = false;
  contactOpen: boolean = false;

  constructor(
  ) { }

  ngOnInit(): void {

    /****************** Multi-text *********************/

    const typed = new Typed('.multiple-text', {
      strings: ['Software Engineer 🧑‍💻', 'Frontend Developer 💻', 'Angular Developer'],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
    });
  }

  /****************** Download Cv *********************/

  getResume() {
    this.downloadFile(this.pdfUrl, 'CV_Hiranmoy');
  }

  private downloadFile(url: string, fileName: string) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        // Create a URL for the blob
        this.blobUrl = window.URL.createObjectURL(blob);

        // Create a link element
        this.a = document.createElement('a');
        this.a.href = this.blobUrl;
        this.a.download = fileName;

        // Append the link element to the body
        document.body.appendChild(this.a);

        // Trigger the click event on the link
        this.a.click();

        // Clean up: remove the link element and revoke the blob URL
        window.URL.revokeObjectURL(this.blobUrl);
        document.body.removeChild(this.a);
      });
  }

  /****************** Open About *********************/

  toggleAbout() {
    this.aboutOpen = !this.aboutOpen;
    if (this.aboutOpen) {
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  /****************** Open Service *********************/

  toggleServices() {
    this.servicesOpen = !this.servicesOpen;
    if (this.servicesOpen) {
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  /****************** Open Skills *********************/

  toggleSkills() {
    this.skillsOpen = !this.skillsOpen;
    if (this.skillsOpen) {
      setTimeout(() => {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
          skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);
    }
  }

  /****************** Open Education *********************/

  toggleEducation() {
    this.educationOpen = !this.educationOpen;
    if (this.educationOpen) {
      setTimeout(() => {
        const educationSection = document.getElementById('education');
        if (educationSection) {
          educationSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  /****************** Open Certification *********************/

  toggleCertification() {
    this.certificationOpen = !this.certificationOpen;
    if (this.certificationOpen) {
      setTimeout(() => {
        const certificationSection = document.getElementById('certification');
        if (certificationSection) {
          certificationSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  /****************** Open Contact *********************/

  toggleContact() {
    this.contactOpen = !this.contactOpen;
    if (this.contactOpen) {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

}
