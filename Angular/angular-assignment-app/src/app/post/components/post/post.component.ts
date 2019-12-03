import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/models/post';
import { PostService } from '../../../service/post.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:Post = new Post();
  post_list:Post[];
  posted:boolean = false;
  constructor(private postService:PostService) { }

  ngOnInit() {
    // console.log(this.post_list);
  }
  asIsOrder(a, b) {
    return 1;
  }
  getPost(){
    this.posted = true;
    this.postService.getPosts().subscribe(
      (list) => {this.post_list = list;
        console.log(this.post_list);}
    );
  }

}
