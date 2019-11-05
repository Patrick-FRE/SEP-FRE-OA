import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Users } from '../shared/models/users';

@Injectable({
  providedIn: 'root'
})
export class SendPostService {
  
  private res = new BehaviorSubject<Users>(null);
  res_cast = this.res.asObservable();
  constructor(private httpClient:HttpClient) { }

  sendPost(formValue){
    this.res_cast = this.httpClient.post("https://jsonplaceholder.typicode.com/users/", formValue).pipe(map((res)=>{return res as Users}))
    // console.log(tmp);
  }
}
