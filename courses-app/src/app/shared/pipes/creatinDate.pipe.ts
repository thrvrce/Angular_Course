import { Pipe, PipeTransform } from '@angular/core';
import { withLeadZero } from '../utils/string.utils';

@Pipe({name: 'creationDate'})
export class CreationDatePipe implements PipeTransform {
   transform(creationDate: string): string {
    const creationDateAsDate = new Date(creationDate)
    const day = creationDateAsDate.getDate()
    const month = creationDateAsDate.getMonth() + 1
    const year = creationDateAsDate.getFullYear()

    return `${withLeadZero(String(day))}.${withLeadZero(String(month))}.${year}`
   }
}
