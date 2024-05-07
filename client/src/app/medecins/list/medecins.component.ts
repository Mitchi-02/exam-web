import { Component } from '@angular/core';
import { MedecinsService } from '../medecins.service';
import { Medecin } from '../../../types';
import { CommonModule } from '@angular/common';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'medecins-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './medecins.component.html',
})
export class MedecinsComponent {
  data: Medecin[] = [];

  f2 = new FormGroup({
    nom: new FormControl(''),
    wilaya: new FormControl(''),
  });

  get nom() {
    return this.f2.get('nom');
  }

  get wilaya() {
    return this.f2.get('wilaya');
  }

  constructor(private medecinService: MedecinsService) {
    this.medecinService.index({}).subscribe((response) => {
      this.data = response.data;
    });
  }

  onSubmit() {
    this.medecinService
      .index({
        nom: this.f2.value.nom ?? '',
        wilaya: this.f2.value.wilaya ?? '',
      })
      .subscribe((res) => {
        this.data = res.data;
      });
  }
}
