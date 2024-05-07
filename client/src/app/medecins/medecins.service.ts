import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constant';
import { Observable } from 'rxjs';
import { Medecin, MedecinPost, SuccessResponse } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class MedecinsService {
  constructor(private http: HttpClient) {}

  index({
    nom,
    wilaya,
  }: {
    nom?: string;
    wilaya?: string;
  }): Observable<SuccessResponse<Medecin[]>> {
    return this.http.get<SuccessResponse<Medecin[]>>(
      `${API_URL}/medecins?nom=${nom ?? ''}&wilaya=${wilaya ?? ''}`
    );
  }

  store(data: MedecinPost): Observable<SuccessResponse<Medecin>> {
    return this.http.post<SuccessResponse<Medecin>>(
      `${API_URL}/medecins`,
      data
    );
  }
}
