import { Component } from '@angular/core';
import { PitClothingCardComponent } from '../pit-clothing-card/pit-clothing-card.component';

@Component({
  selector: 'app-pet-clothing',
  imports: [PitClothingCardComponent],
  templateUrl: './pet-clothing.component.html',
  styleUrl: './pet-clothing.component.css',
})
export class PetClothingComponent {}
