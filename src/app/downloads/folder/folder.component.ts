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

  constructor(private http: HttpClient, private rom: RomService) { }

  ngOnInit() {
  }

}
