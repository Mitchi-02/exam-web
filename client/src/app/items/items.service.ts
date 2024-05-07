import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../constant';
import { Item, ItemPost, SuccessResponse } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}

  index(): Observable<SuccessResponse<Item[]>> {
    return this.http.get<SuccessResponse<Item[]>>(`${API_URL}/items`);
  }

  store(data: ItemPost): Observable<SuccessResponse<Item>> {
    return this.http.post<SuccessResponse<Item>>(`${API_URL}/items`, data);
  }

  update(id: string, data: ItemPost): Observable<SuccessResponse<Item>> {
    return this.http.put<SuccessResponse<Item>>(`${API_URL}/items/${id}`, data);
  }

  destroy(id: string): Observable<SuccessResponse<Item>> {
    return this.http.delete<SuccessResponse<Item>>(`${API_URL}/items/${id}`);
  }

  show(id: string): Observable<SuccessResponse<Item>> {
    return this.http.get<SuccessResponse<Item>>(`${API_URL}/items/${id}`);
  }
}
