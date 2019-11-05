import { Component, OnInit } from '@angular/core';
import { SendPostService } from '../service/send-post.service';

@Component({
  selector: 'app-reactive-form-response',
  templateUrl: './reactive-form-response.component.html',
  styleUrls: ['./reactive-form-response.component.css']
})
export class ReactiveFormResponseComponent implements OnInit {

  constructor(private send_post:SendPostService) { }

  ngOnInit() {
    this.send_post.res_cast.subscribe((data)=>{console.log(data)});
  }

}
