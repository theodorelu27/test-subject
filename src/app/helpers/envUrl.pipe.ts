import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'envUrl'
})
export class EnvUrlPipe implements PipeTransform {

  transform(value: any): any {
    return environment.baseUrl + value;
  }

}
