import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onsale'
})
export class OnsalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('pipe:', value);
    if (value) {
      return 'Đang hạ giá!'
    }
    return '';
  }

}
