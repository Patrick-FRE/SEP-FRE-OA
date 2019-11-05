import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../service/modal.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  show:boolean;
  text:String;

  constructor(private modalService:ModalService) { }

  ngOnInit() {
    this.modalService.show_cast.subscribe(show => this.show = show);
    this.modalService.body_text_cast.subscribe(text => this.text = text);
  }

  backDrop(text:String){
    this.show = true;
    this.modalService.updateBodyText(text);
  }
}
