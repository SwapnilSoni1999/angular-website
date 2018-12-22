import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  private romObj: Object;
  private displayData: Array<any>;

  constructor(private http: HttpClient, private route: Router) { }

  parseJson() {
    console.log(this.getJSON());
  }
  public getJSON() {
    this.http.get('/assets/rom.json').pipe(map(data => {
      this.romObj = data;
      // @ts-ignore
      let folLength = this.romObj.romName.length;
      // @ts-ignore
      this.displayData = this.romObj.romName;
    })).subscribe(result => {
    });
  }

  getFolId(index: number) {
    console.log(index);
  }

  ngOnInit() {
    this.parseJson();
    if (this.route.url == '/downloads') {
      let bg = document.querySelector('.particles-js-canvas-el') as HTMLElement;
      bg.style.visibility = 'hidden';
    }
  }

}


