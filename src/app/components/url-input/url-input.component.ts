import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.css']
})
export class UrlInputComponent implements OnInit {
  public url: string = "";

  constructor() { }

  ngOnInit(): void { }

  onShorten() {
    console.log("Shorten the url mate")
  }
}
