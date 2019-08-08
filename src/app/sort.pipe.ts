import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(toSort: Object[], sortType: string): Object[] {
    let sorted = toSort.sort((a, b) => {
      if (isNaN(a[sortType])) {
        if (a[sortType].toLowerCase() > b[sortType].toLowerCase()) {
          return 1;
        }
        if (a[sortType].toLowerCase() < b[sortType].toLowerCase()) {
          return -1;
        }
        return 0;
      }
      else {
        return a[sortType] > b[sortType] ? 1 : -1;
      }
    });
    return sorted;
  }

}
