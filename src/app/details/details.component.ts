import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
@Component({
  standalone: true,
  selector: 'app-details',
  templateUrl: './details.component.html',
  imports:[CommonModule, ReactiveFormsModule ],
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  // inject gives the DetailsComponent access to the ActivatedRoute router feature 
  // that enables you to have access to the data about the current route.  
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']); // convert id to Number
    this.housingService.getHousingLocationById(housingLocationId).then(
      housingLocation => this.housingLocation = housingLocation
    );
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
