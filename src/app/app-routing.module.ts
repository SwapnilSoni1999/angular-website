import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DownloadsComponent } from './downloads/downloads.component';

const routes: Routes = [
  { path:'', component: PortfolioComponent },
  { path:'downloads', component: DownloadsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
