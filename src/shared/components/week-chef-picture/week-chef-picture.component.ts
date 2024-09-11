import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-week-chef-picture',
  standalone: true,
  imports: [],
  templateUrl: './week-chef-picture.component.html',
  styleUrl: './week-chef-picture.component.scss',
})
export class WeekChefPictureComponent {
  @Input({ required: true }) chefPicture!: string;
  @Input({ required: true }) chefName!: string;
}
