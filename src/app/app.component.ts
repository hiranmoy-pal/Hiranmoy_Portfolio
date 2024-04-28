import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hiranmoy_Portfolio';
  pdfUrl: any = 'assets/pdf/CV_Hiranmoy.pdf';
  blobUrl: any;
  a: any;
  aboutOpen: boolean = false;

  constructor(
  ) { }

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

}
