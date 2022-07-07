import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNullWithString'
})
export class ReplaceNullWithStringPipe implements PipeTransform {

  transform(value: any, replacement: string = 'N/A'): any {
    
    if (typeof value === undefined || value === null) {
      return replacement
    }

    return value
  }

}
