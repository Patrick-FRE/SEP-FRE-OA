import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment-app';
  model = {
    left: true,
    middle: false,
    right: false
  };
  constructor(private modalService: NgbModal){};


  openSm(content) {
    console.log(content);
    this.modalService.open(content);
    console.log(this.modalService.open(content));
  }
}
