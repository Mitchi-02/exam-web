import { Routes } from '@angular/router';
import { MedecinsComponent } from './medecins/list/medecins.component';
import { CreateMedecinComponent } from './medecins/create/createMedecin.component';

export const routes: Routes = [
  {
    path: 'medecins',
    component: MedecinsComponent,
  },

  {
    path: 'medecins/create',
    component: CreateMedecinComponent,
  },
];
