import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-download-index',
  templateUrl: './download-index.component.html',
  styleUrls: ['./download-index.component.css']
})
export class DownloadIndexComponent implements AfterViewInit {
'//p374858.clksite.com/adServe/banners?tid=374858_735346_0';
  constructor() { }

  ngAfterViewInit() {
    const element = document.createElement('script');
    element.src = 'blabla';
    element.type = 'text/javascript';
    let kek = 
    document.getElementById('ad').appendChild(element);
  }
}
