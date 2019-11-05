import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/shared/models/post';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  post:Post = new Post();
  post_list:Post[];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (list) => {this.post_list = list;
        console.log(this.post_list);}
    );
    // console.log(this.post_list);
  }
  asIsOrder(a, b) {
    return 1;
  }
  // valueAscOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
  //   return a.value.localeCompare(b.value);
  // }

}
