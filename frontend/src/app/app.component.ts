import {Component, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'app';

  constructor(private http: Http) {
    this.http
      .get('http://localhost:5000/api/title')
      .subscribe((data) => { this.title = data.json().title })
  }
}
