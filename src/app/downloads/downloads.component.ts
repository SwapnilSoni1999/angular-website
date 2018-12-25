import { Component, OnInit, Input } from '@angular/core';
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

  romData: Array<any>;
  @Input() foldur: boolean;

  constructor(private http: HttpClient, private route: Router, private rom: RomService) { }

  printPath(ele: String) {
    console.log(ele);
    // @ts-ignore
    for(let i=0; i<this.romData.length; i++) {
      // @ts-ignore
      if(ele == this.romData[i].path) {
        console.log("matched at:",i);
      }
    }
  }

  setRomFolder() {
    this.rom.getJSON().subscribe((data: Array<any>) => {
      this.romData = data;
      console.log(this.romData);
    });
  }


  ngOnInit() {
    if (this.route.url) {
      const bg = document.querySelector('.particles-js-canvas-el') as HTMLElement;
      bg.style.visibility = 'hidden';
    }
    this.setRomFolder();
  }

}


