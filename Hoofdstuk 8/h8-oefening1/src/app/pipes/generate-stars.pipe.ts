import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generateStars'
})
export class GenerateStarsPipe implements PipeTransform {

  transform(value: number): any {
    let stars : string = "";
    for (let i = 0; i < value; i++) {
      stars = stars.concat('<span>&#9733;</span>');
    }

    return stars;
  }

}
