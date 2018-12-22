import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RomService } from '../rom.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
  providers: [ RomService ]
})
export class FolderComponent implements OnInit {

  // private routeData: Object;
  // private linkRoute: Array<any>;

  // trackRoute() {
  //   this.routeData = this.rom.getJSON().subscribe(data => {
  //     this.routeData = data;
  //     console.log(this.routeData);
  //     // @ts-ignore
  //     this.linkRoute = this.routeData.romPath;
  //   });
  // }

  constructor(private http: HttpClient, private rom: RomService) { }

  ngOnInit() {
  }

}
