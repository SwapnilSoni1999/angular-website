import { Component, OnInit } from '@angular/core';
import { RomService } from '../rom.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  providers: [ RomService ]
})
export class DeviceComponent implements OnInit {
  romData: Array<any>;

  constructor(private rom: RomService, private http: HttpClient, private router: Router) { }

  deviceLoad() {
    let aidi = this.router.url;
    console.log(aidi.slice(11));
    aidi = aidi.slice(11);
    this.rom.getJSON().subscribe((data: Array<any>) => {
      this.romData = data;
      console.log(this.romData);
      let chek;
      // @ts-ignore
      for (let i = 0; i < this.romData.length; i++) {
        chek = this.romData[i].path;
        if (aidi == chek) {
          console.log("matched at:", i);
          this.romData = this.romData[i].deviceData;
        }
      }
    });
  }

  ngOnInit() {
    if (this.router.url) {
      const bg = document.querySelector('.particles-js-canvas-el') as HTMLElement;
      bg.style.visibility = 'hidden';
    }
    this.deviceLoad();
  }

}
