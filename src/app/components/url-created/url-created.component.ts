import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-url-created',
  templateUrl: './url-created.component.html',
  styleUrls: ['./url-created.component.css']
})
export class UrlCreatedComponent implements OnInit {
  appUrl: string = "http://localhost:4200";
  shortUrlCode: string = "";
  shortenedUrl: string = "";

  constructor(private router: Router, private clipboard: Clipboard) {
    this.shortUrlCode = this.router.getCurrentNavigation()?.extras.state?.['shortUrl'];
  }

  ngOnInit(): void {
    if (!this.shortUrlCode) {
      console.log("Don't display anything!")
    } else {
      this.shortenedUrl = this.appUrl + `/${this.shortUrlCode}`;
    }
  }

  onCopyToClipboard() {
    this.clipboard.copy(this.shortenedUrl);
    alert("Copied to clipboard!");
  }

}
