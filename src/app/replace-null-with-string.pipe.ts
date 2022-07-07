import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNullWithString'
})
export class ReplaceNullWithStringPipe implements PipeTransform {

  transform(value: null, replacement: string = 'N/A'): string {
    return replacement;
  }

}
