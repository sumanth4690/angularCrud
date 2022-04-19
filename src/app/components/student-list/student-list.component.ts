// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  public data:any=[];
  constructor(private http: HttpClient){}
  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(user=>{
      this.data=user;
      console.log(user);
    })
  }

  ngOnInit(): void {
  }
}
