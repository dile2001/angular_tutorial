import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  templateUrl: './housing-location.component.html',
  imports: [
    CommonModule,
  ],
  styleUrls: ['./housing-location.component.scss'],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  //You have to add the ! because the input is expecting the value to be passed. 
  //In this case, there is no default value.
}
