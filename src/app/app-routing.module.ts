import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { DownloadIndexComponent } from './download-index/download-index.component';
import { DeviceComponent } from './downloads/device/device.component';
import { BuildIndexComponent } from './build-index/build-index.component';
import { BuildComponent } from './downloads/device/build/build.component';
import { DeviceIndexComponent } from './device-index/device-index.component';


const routes: Routes = [
  { path:'', component: PortfolioComponent },
  { path:'downloads', component: DownloadIndexComponent, children: [
    { path:'', component: DownloadsComponent }, //AKA RomFolderComponent 
    { path:':id', component: DeviceIndexComponent, children: [
      { path:'', component: DeviceComponent },
      { path:':id', component: BuildIndexComponent, children: [
        { path:'', component: BuildComponent }
      ] }
    ] }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
