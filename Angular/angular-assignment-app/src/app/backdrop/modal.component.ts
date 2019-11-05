import { Component, OnInit } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  bodyText:String;
  constructor(private modalService:ModalService) { }

  ngOnInit() {
    this.modalService.body_text_cast.subscribe(text=>{this.bodyText = text});
  }
  
  updateShow(){
    this.modalService.updateShowValue(false);
  }
}
