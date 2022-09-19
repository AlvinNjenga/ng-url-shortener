import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShortenedUrl } from 'src/models/ShortenedUrl';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  apiUrl: string = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getShortenedUrls(): Promise<ShortenedUrl[]>  {
    return new Promise((resolve, reject) => {
      this.httpClient.get<ShortenedUrl[]>(this.apiUrl + '/shortenedUrls').subscribe({
        next: response => resolve(response),
        error: err => reject(err)
      });
    })
  }

  getShortenedUrl(code: string): Promise<ShortenedUrl[]>  {
    return new Promise((resolve, reject) => {
      console.log("Code in get shortened URL: ", code);
      this.httpClient.get<ShortenedUrl[]>(this.apiUrl + `/shortenedUrls?code=${code}`).subscribe({
        next: response => resolve(response),
        error: err => reject(err)
      });
    })
  }

  async createShortenedUrl(urlToShorten: string): Promise<string> {
    var shortUrls = await this.getShortenedUrls();

    var existingUrl = shortUrls.filter(url => url.url == urlToShorten);
    if (existingUrl.length) return existingUrl[0].code;

    var urlCode = shortUrls[shortUrls.length - 1].id ?? 0 + 1;

    var shortenedUrl: ShortenedUrl = {
      url: urlToShorten,
      code: urlCode.toString(),
      visits: 0
    };

    this.httpClient.post(this.apiUrl + '/shortenedUrls', shortenedUrl, httpOptions).subscribe({
      next: (res) => {
        console.log("Response from saving: ", res);
      }
    })

    return new Promise((resolve, reject) => resolve(urlCode.toString()));
  }

}
