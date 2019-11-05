import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private show = new BehaviorSubject<boolean>(false);
  show_cast = this.show.asObservable();
  private body_text = new BehaviorSubject<String>("");
  body_text_cast = this.body_text.asObservable();
  constructor() { }

  updateShowValue( bVal: boolean){
      this.show.next(bVal);
  }
  updateBodyText(text: String){
    this.body_text.next(text);
  }
}
