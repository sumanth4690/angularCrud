import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-firebase-post',
  templateUrl: './firebase-post.component.html',
  styleUrls: ['./firebase-post.component.scss']
})
export class FirebasePostComponent implements OnInit {
  products:any=[];
  productsForm:any=FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.productsForm = this.fb.group({
      productName : 
    }
      
    )
  }


}
