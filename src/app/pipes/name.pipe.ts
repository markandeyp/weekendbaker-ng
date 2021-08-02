import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
})
export class NamePipe implements PipeTransform {
  transform(
    value: { firstname: string; lastname: string },
    ...args: unknown[]
  ): unknown {
    console.log('Params are: ', args);
    return `${value.firstname} ${value.lastname}`;
  }
}
