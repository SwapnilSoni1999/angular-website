import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { FolderComponent } from './downloads/folder/folder.component';
import { HttpClientModule } from '@angular/common/http';
import { LineageComponent } from './downloads/lineage/lineage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    DownloadsComponent,
    FolderComponent,
    LineageComponent
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
