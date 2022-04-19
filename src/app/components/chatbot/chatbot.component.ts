import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {
  public data:any=[];
  constructor(private http:HttpClient) { }
  getPhotos(){
    const url="https://jsonplaceholder.typicode.com/photos";
    this.http.get(url).subscribe(pic=>{
      this.data=pic;
      console.log(pic);
    })
  }
  ngOnInit(): void {
  }

}
