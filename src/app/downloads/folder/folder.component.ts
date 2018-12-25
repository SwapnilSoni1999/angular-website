import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent implements OnInit {

  @Output() foldur: boolean;
  @Output() phile: boolean;

  constructor() { }

  ngOnInit() {
  }

}
