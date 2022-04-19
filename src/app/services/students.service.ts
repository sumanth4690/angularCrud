import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  getStudents() {
    return [
      { id: 1, name: 'sumanth', course: 'ANGULAR' },
      { id: 2, name: 'ddd', course: 'REACT' },
      { id: 3, name: 'rrr', course: 'VUE' },
      {
        id: 4,
        name: 'sss',
        course: 'BOOTSTRAP',
      },
    ];
  }
  constructor(private httpClient :HttpClient) {}

  fetchData(products:any){
    return this.httpClient.post('https://post-b1d23-default-rtdb.firebaseio.com/products.json',products);
  }
}
