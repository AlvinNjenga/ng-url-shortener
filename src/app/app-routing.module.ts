import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UrlInputComponent } from './components/url-input/url-input.component';
import { UrlCreatedComponent } from './components/url-created/url-created.component';
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  { path: "", component: UrlInputComponent },
  { path: "shorten", component: UrlCreatedComponent },
  { path: "**", component: RedirectComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
