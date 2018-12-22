import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faHeart = faHeart;

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url == '/footer') {
      $('.particles-js-canvas-el').remove();
    }
  }

}
