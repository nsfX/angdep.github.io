import { ApiserviceService } from './apiservice.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
  constructor(private api: ApiserviceService) { }

  ngOnInit(): void {
    console.log("entrada")
    this.api.getResponse().subscribe(result => {
      console.log(result);
    });
  }
}
