import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  standalone: true,
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss']
})
export class GenericCardComponent {
  @Input({ required: true }) imageSrc!: string;
  @Input({ required: true }) title!: string;
}
