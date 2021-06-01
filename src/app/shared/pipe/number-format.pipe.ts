import { visitValue } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';
// core

// shared

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
  constructor(){}
  transform(value: any):string {
    if (value) {
      try {
        if (!isNaN(value)) {
          var text = value.toString();
          var pattern = /(-?\d+)(\d{3})/;
          while (pattern.test(text)) {
            text = text.replace(pattern, "$1,$2");
          }
          return text;
        } else {
          return value;
        }
      } catch (ex) {
        return value;
      }
    } else {
      return '';
    }
  }
}
