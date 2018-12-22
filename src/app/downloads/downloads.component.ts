import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RomService } from './rom.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css'],
  providers: [ RomService ]
})
export class DownloadsComponent implements OnInit {

  private romData: Object;
  private displayData: Array<any>;
  

  constructor(private http: HttpClient, private route: Router,private rom:RomService) { }

  setRomFolder() {
    this.romData = this.rom.getJSON().subscribe(data => {
      this.romData = data;
      // @ts-ignore
      // this.displayData = this.romData.romName;
      console.log(this.romData);
    });
  }
  

  ngOnInit() {
    if (this.route.url == '/downloads') {
      let bg = document.querySelector('.particles-js-canvas-el') as HTMLElement;
      bg.style.visibility = 'hidden';
    }
    this.syncFn();
  }
  async syncFn() {
    await this.setRomFolder();
  }

}


