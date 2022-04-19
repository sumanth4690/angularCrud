import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  public students : any=[];
  public data:any=[];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getData(){
    const url='https://jsonplaceholder.typicode.com/comments';
    this.http.get(url).subscribe(res=>{
      this.data=res;
      console.log(res)
    })
}
}
