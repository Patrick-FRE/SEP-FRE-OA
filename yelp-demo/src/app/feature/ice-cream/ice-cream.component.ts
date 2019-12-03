import {Component, OnInit} from '@angular/core';
import {IceCreamService} from '../../shared/services/ice-cream.service';

@Component({
  selector: 'app-ice-cream',
  templateUrl: './ice-cream.component.html',
  styleUrls: ['./ice-cream.component.sass']
})
export class IceCreamComponent implements OnInit {
  iceCream: any[];

  constructor(private icService: IceCreamService) {
  }

  ngOnInit() {
    console.log('hi');

    this.icService.fetchData().subscribe(data => {
      console.log(data);
    });
  }


}
