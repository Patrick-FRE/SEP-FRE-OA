import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-core-component',
  templateUrl: './core-component.component.html',
  styleUrls: ['./core-component.component.css']
})
export class CoreComponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  postPage(){
    this.router.navigate(['post']);
  }
  homePage(){
    this.router.navigate(['home']);
  }

}
