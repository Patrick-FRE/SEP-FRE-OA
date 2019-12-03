import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  text="";
  collectionCensoredNameList= [];
  artworkUrl100List = [];
  ngOnInit() {
  }

  search(){
    this.apiService.getItunesApi(this.text).subscribe((res)=>{
        console.log(res);
        this.collectionCensoredNameList= [];
        this.artworkUrl100List = [];
        for(let i = 0 ; i < res.resultCount; i++)
        {
          this.collectionCensoredNameList.push(res.results[i].collectionCensoredName);
          this.artworkUrl100List.push(res.results[i].artworkUrl100);
        }
        
    })
    console.log(this.collectionCensoredNameList);
    console.log(this.artworkUrl100List);

  }

}
