import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { Users } from '../shared/models/users';
import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SendPostService } from '../service/send-post.service';




@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // productFrom = new FormGroup({name: new FormControl("", Validators.required), description: new FormControl("")})
  // name = new FormControl("Name");
  //tmpData:string;
  productForm = this.formbuilder.group({
                id:["",Validators.required], 
                name:["name",Validators.required],
                username:["username",Validators.required],
                email:["",Validators.required],
                address: this.formbuilder.group({
                         street:[""],
                         suite:[""], 
                         city:[""],
                         zipcode:[""],
                         geo: this.formbuilder.group({
                                  lat:[""],
                                  lng:[""]
                                  }),
                         }),
                phone:["",[Validators.required,Validators.pattern('[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]')]],
                website:[""],
                company: this.formbuilder.group({
                      name:[""],
                      catchPhrase:[""], 
                      bs:[""]
                      }),
                });
  
  constructor(private formbuilder:FormBuilder, private postService:SendPostService, private router:Router) { }

  ngOnInit() {
    // this.productFrom.setValue({name:"Apple",description:"good"})
    // this.productFrom.patchValue({name:"banana"})
    // this.productFrom.valueChanges.subscribe((data)=>{
    //   console.log(data)
    // })

    // this.name.setValue("Apple")
    // this.name.valueChanges.subscribe((data)=>{
    //   this.tmpData = data;
    // })
  }
  saveProduct(){
    //console.log(this.productForm.value);
    console.log(this.productForm.status);
    this.router.navigate(['formResponse']);
    //this.httpClient.post("https://jsonplaceholder.typicode.com/users/",this.productForm.value).subscribe((res)=>{console.log(res)});
    this.postService.sendPost(this.productForm.value);
    // let x = this.httpClient.post("https://jsonplaceholder.typicode.com/users/",this.productForm.value)
    // .pipe(map((res)=>{return res as Users}),
    // catchError((error)=>throwError(new Error(error))))
    // console.log(x);
    
    // console.log(this.productForm.status);
  }



}
