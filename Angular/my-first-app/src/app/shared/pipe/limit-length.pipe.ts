import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitLength'
})
export class LimitLengthPipe implements PipeTransform {

  transform(str: string): string {
    let res = ""
    if(str.length > 25)
      res += str.substring(0,25) + '...';
    else 
      res = str;
    return res;
  }

}
