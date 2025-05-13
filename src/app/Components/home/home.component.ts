import { Component } from '@angular/core';
import { HeaderComponent } from '../Header/header.component';
import { SliderComponent } from '../slider/slider.component';
import { FooterComponent } from '../Footer/footer.component';
import { PetClothingComponent } from '../pet-clothing/pet-clothing.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    PetClothingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
