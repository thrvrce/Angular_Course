import { Pipe, PipeTransform } from '@angular/core';
import { withLeadZero } from '../utils/string.utils';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
   transform(value: number): string {
    const minutes = value % 60
    const hours = (value - minutes) / 60
    const courseDurationText = `${withLeadZero(String(hours))}:${withLeadZero(String(minutes))}`

    return courseDurationText
   }
}
