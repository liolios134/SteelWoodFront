import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contact: any = [];
  public departments : any = [];

  public mapZoom: Number = 6;
  constructor(private http:HttpClient) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/contact")
    .subscribe(response => {
      this.contact = response;
    });

    this.http.get("http://localhost:3000/departments")
    .subscribe(response => {
      this.departments = response;
      console.log(response);
    });

  }

}
