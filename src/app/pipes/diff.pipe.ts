import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'diff',
  standalone: true,
})
export class DiffPipe implements PipeTransform {

  transform(value: number): string {
    const fixedValue = value.toFixed(2);
    return value > 0 ? '+' + fixedValue : fixedValue;
  }

}
