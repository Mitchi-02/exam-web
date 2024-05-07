import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MedecinsService } from '../medecins.service';
import { CommonModule } from '@angular/common';
import { WILAYAS } from '../../../constant';

@Component({
  standalone: true,
  selector: 'app-create-item',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './createMedecin.component.html',
})
export class CreateMedecinComponent {
  wilayas = WILAYAS;

  f2 = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
    wilaya: new FormControl('', [Validators.required]),
    commune: new FormControl('', [Validators.required]),
  });

  get nom() {
    return this.f2.get('nom');
  }

  get wilaya() {
    return this.f2.get('wilaya');
  }

  get commune() {
    return this.f2.get('commune');
  }

  constructor(private medecinService: MedecinsService) {}

  communes: string[] = [];

  onWilayaChange() {
    const selectedWilaya = this.f2.value.wilaya;
    const selectedWilayaData = this.wilayas.find(
      (wilaya) => wilaya.nom === selectedWilaya
    );
    this.communes = selectedWilayaData ? selectedWilayaData.communes : [];
  }

  onSubmit() {
    this.medecinService
      .store({
        nom: this.f2.value.nom ?? '',
        wilaya: this.f2.value.wilaya ?? '',
        commune: this.f2.value.commune ?? '',
      })
      .subscribe(() => {
        alert('add successfull');
      });
  }
}
