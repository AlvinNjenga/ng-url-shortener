import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShortenedUrl } from 'src/models/ShortenedUrl';

import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {
  constructor(private router: Router, private urlService: UrlService) { }

  async ngOnInit(): Promise<void> {
    await this.redirectIfValid(this.router.url.substring(1));
  }

  async redirectIfValid(code: string) {
    var urls: ShortenedUrl[] = await this.urlService.getShortenedUrl(code);

    console.log(urls);

    if (!urls.length) {
      console.log("Not valid shortUrl");
      this.router.navigateByUrl("/");
    }

    window.location.href = urls[0].url;
  }
}
