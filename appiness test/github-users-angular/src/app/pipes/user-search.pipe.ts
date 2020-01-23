import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {


  transform(value: any, args?: any): any {
    if (!args) return value;
    let result = value.find((item) => item.userName.toLowerCase().indexOf(args.toLowerCase()) > -1);
    return !!result ? [result] : [];

  }

}
