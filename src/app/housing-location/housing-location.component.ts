import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule, CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.less',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation

}
