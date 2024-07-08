import { Component } from '@angular/core';
import { IconComponent } from '../../../shared/icons/icon/icon.component'; 
import { CommonModule } from '@angular/common';
import { icons } from '../../data/icons';

@Component({
  selector: 'app-icon-meaning',
  standalone: true,
  imports: [IconComponent,CommonModule],
  templateUrl: './icon-meaning.component.html',
  styleUrl: './icon-meaning.component.scss'
})
export class IconMeaningComponent {
  icons = icons;
}
