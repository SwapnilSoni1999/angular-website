import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class RomService {
    constructor(private http: HttpClient) {}

    public getJSON() {
        return this.http.get('/assets/rom.json').pipe(map(data => {
            return data;
        }));
    }
}