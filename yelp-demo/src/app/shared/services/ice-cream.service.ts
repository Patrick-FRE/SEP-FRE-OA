import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService {

  constructor(private hc: HttpClient) {
  }

  // https://api.yelp.com/v3/businesses/search
  fetchData(): Observable<any> {
    const num = 5;
    const keyword = 'ice-cream';
    const key = 'Bearer 1LrK-WybhWdnHwVkcIj2yO1KP1x2yF812eo8b8IB5CevZFmutpt9odsUASNadAYzZ-aie_QcvnqeBmHbggqsf-7Y0G6CGc47Z6jQwYft9D0utlQisNTiqnDQPl3UXXYx';
    // const url = 'https://api.yelp.com/v3/businesses/search';
    const url = 'https://api.yelp.com/v3/autocomplete?text=del';
    const url1 = 'https://jsonplaceholder.typicode.com/posts';

    const params = new HttpParams().set('term', 'food');
    const httpHeaders = new HttpHeaders().set('authorization', key);

    return this.hc.get(url1, {
      // params: new HttpParams()
      //   .set('term', 'food'),
      headers: new HttpHeaders({'aaa':'b'})
      }
    );
  
  }
}
