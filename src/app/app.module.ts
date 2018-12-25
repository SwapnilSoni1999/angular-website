import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { FolderComponent } from './downloads/folder/folder.component';

import { DeviceComponent } from './downloads/device/device.component';
import { DeviceIndexComponent } from './device-index/device-index.component';
import { DownloadIndexComponent } from './download-index/download-index.component';
import { BuildComponent } from './downloads/device/build/build.component';
import { BuildIndexComponent } from './build-index/build-index.component';
import { FileComponent } from './downloads/file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    DownloadsComponent,
    FolderComponent,
    DeviceComponent,
    DownloadIndexComponent,
    DeviceIndexComponent,
    BuildComponent,
    BuildIndexComponent,
    FileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
