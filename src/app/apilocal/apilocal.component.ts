import { ApiserviceService } from './../apiservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apilocal',
  templateUrl: './apilocal.component.html',
  styleUrls: ['./apilocal.component.css']
})
export class ApilocalComponent implements OnInit {

  constructor(private api: ApiserviceService) { }

  ngOnInit(): void {
    this.api.getResponse().subscribe(result => {
      console.log(result);
    });
  }

}
