import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { urlValidator, isValidUrl } from './url-input-validator';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.css']
})
export class UrlInputComponent implements OnInit {
  url: string = "";
  urlInputControl: FormControl = new FormControl('', [urlValidator(), Validators.required]);

  constructor(private urlService: UrlService, private router: Router) { }

  ngOnInit(): void { }

  async onSubmit() {
    if (!isValidUrl(this.urlInputControl.value) )
      return;

    var urlCode = await this.urlService.createShortenedUrl(this.urlInputControl.value);

    this.url = "";
    this.router.navigateByUrl('/shorten', { state: { shortUrl: urlCode } });
  }
}
