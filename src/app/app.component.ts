import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hiranmoy_Portfolio';

  getResume() {
    const pdfUrl = 'assets/pdf/CV_Hiranmoy.pdf';
    this.downloadFile(pdfUrl, 'CV_Hiranmoy');
  }

  private downloadFile(url: string, fileName: string) {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        // Create a URL for the blob
        const blobUrl = window.URL.createObjectURL(blob);

        // Create a link element
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = fileName;

        // Append the link element to the body
        document.body.appendChild(a);

        // Trigger the click event on the link
        a.click();

        // Clean up: remove the link element and revoke the blob URL
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
      });
  }
}
