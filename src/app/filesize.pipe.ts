import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(value: number): string {
    const mb = 1024*1024, kb = 1024,
    MB = 'Mb',
    KB = 'Kb',
    B = 'b';

    if(value/mb >= 1) {
      return (value/mb).toFixed(2) + MB;
    }
    if(value / kb >= 1) {
      return (value / kb).toFixed(2) + KB;
    }
    return value + B;
  }

}