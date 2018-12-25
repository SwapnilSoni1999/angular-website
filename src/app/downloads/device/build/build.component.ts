import { Component, OnInit } from '@angular/core';
import { RomService } from '../../rom.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css'],
  providers: [ RomService ]
})
export class BuildComponent implements OnInit {

  romData: Array<any>;

  constructor(private rom: RomService, private http: HttpClient, private router: Router) { }

  getBuilds() {
    let deviceID = this.router.url;
    deviceID = deviceID.slice(11);
    deviceID = deviceID.slice(this.getSlash(deviceID));
    console.log("device id :",deviceID);

    let buildID = this.router.url;
    buildID = buildID.slice(11, this.getSlash(buildID) - 1);
    console.log("build id:",buildID);

    this.rom.getJSON().subscribe((data : Array<any>) => {
      console.log(data);
      for(let i=0; i<data.length; i++) {
        if(data[i].path == buildID) {
          console.log("matched build id at:", i);
          for(let j=0; j<data[i].deviceData.length; j++) {
            if(data[i].deviceData[j].name == deviceID) {
              console.log("found deviceID (loop) at :",j, data[i].deviceData[j].name);
              this.romData = data[i].deviceData[j].builds;
              console.log(this.romData);
            }
          }
        }
      }
    });
  }
  getSlash(str: String) : number {
    let num;
    console.log(str);
    for(let i=0; i<str.length; i++) {
      if(str[i] === '/') {
        console.log("found / at:",i);
        num = i;
      }
    }
    return num+1;
  }

  ngOnInit() {
    if (this.router.url) {
      const bg = document.querySelector('.particles-js-canvas-el') as HTMLElement;
      bg.style.visibility = 'hidden';
    }
    this.getBuilds();
  }

}
