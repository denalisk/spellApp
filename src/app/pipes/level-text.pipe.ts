import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelText'
})
export class LevelTextPipe implements PipeTransform {

  transform(level: number): string {
    if (level != 0 && !level) {
      return '' + level;
    }

    if (level === 0) {
      return 'Cantrip';
    }
    return 'Level ' + level;
  }

}
