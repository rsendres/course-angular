import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input()
  rating: number = 0;

  public starWidth!: number;
  ngOnChanges(): void {
    this.starWidth = (this.rating * 74) / 5;
  }
}
