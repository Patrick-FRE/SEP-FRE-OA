import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  
  likes:number = 10
  flag:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  addOne(){
    if(this.flag)
    { 
       this.likes += 1;
       this.flag = !this.flag;
    }
    else{
      this.likes -= 1;
      this.flag = !this.flag;
    }
      
  }

}
