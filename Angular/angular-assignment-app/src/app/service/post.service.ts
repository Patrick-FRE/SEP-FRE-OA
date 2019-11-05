import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from '../shared/models/post';
import {map, catchError} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  constructor(private httpClient:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map((res)=>{return res as Post[]}),
    catchError((error)=>throwError(new Error(error)))
    ) 
  }
}
