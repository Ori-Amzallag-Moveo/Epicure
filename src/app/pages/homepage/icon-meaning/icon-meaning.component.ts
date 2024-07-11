import { Component } from '@angular/core';
import { IconComponent } from '../../../../shared/icons/icon/icon.component'; 
import { iconsData } from '../../../data/iconsData';

@Component({
  selector: 'app-icon-meaning',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './icon-meaning.component.html',
  styleUrl: './icon-meaning.component.scss'
})
export class IconMeaningComponent {
  icons = iconsData;
}
