import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Typed  from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: [
    './portfolio.component.css',
    './google-color.css'
  ],
})
export class PortfolioComponent implements OnInit {

  constructor(private _router: Router) {
  }
  
  ngOnInit() {
    if(this._router.url == '/') {
      $('.particles-js-canvas-el').css("visibility", "visible");
    }

    $(document).ready(function() {
      var trackClass;
      $(".social").hover(function (e) {
        var randomClass = getRandomClass();
        trackClass = randomClass;
        $(e.target).addClass(randomClass);
      }, function (e) {
        $(e.target).removeClass(trackClass);
      });
      function getRandomClass() {
        //Store available css classes
        var classes = new Array("g-green", "g-red", "g-yellow", "g-blue");

        //Get a random number from 0 to 4
        var randomNumber = Math.floor(Math.random() * 4);

        return classes[randomNumber];
      }

      if(this.router == '/') {
        $('.particles-js-canvas-el').css("visibility", "visible");
      }
    });

    let options = {
      strings: ["a Frontend Developer.", "a Custom ROM Developer."],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: true,
      cursorChar: "|",
      loop: true
    }
    // @ts-ignore
    let typed = new Typed(".typed", options);

  }

}
