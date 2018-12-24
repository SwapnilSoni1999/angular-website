import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DownloadIndexComponent } from './download-index/download-index.component';
import { DeviceComponent } from './downloads/device/device.component';

const routes: Routes = [
  { path:'', component: PortfolioComponent },
  { path:'downloads', component: DownloadIndexComponent, children: [
    { path:'', component: DownloadsComponent }, //AKA RomFolderComponent 
    { path:':id', component: DeviceComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
