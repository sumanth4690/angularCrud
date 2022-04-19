import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor(private http:HttpClient) { 
    getdetails :[
      {
        "postId":1010,"id":1,"name":"sumanth","email":"ss@gmail.com","body":"jhksadhfhsdahk"
      },
      {
        "postId":1010,"id":1,"name":"sumanth","email":"ss@gmail.com","body":"jhksadhfhsdahk"
      },
      {
        "postId":1010,"id":1,"name":"sumanth","email":"ss@gmail.com","body":"jhksadhfhsdahk"
      }
    ]
  }

  ngOnInit(): void {
  }

}
