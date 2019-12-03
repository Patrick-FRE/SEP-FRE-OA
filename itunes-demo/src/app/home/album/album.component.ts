import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() collectionCensoredName;
  @Input() artworkUrl100;
  constructor() { }

  ngOnInit() {
  }

}
