import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartnerModel } from '../interfaces/header.model';

@Injectable({
  providedIn: 'root', // Automatically provided in the root module
})
export class PartnerService {
  private apiUrl =
    'https://mockanapi.com/s/67ae1b3403f9ffca6f47eb79/partners?mock_delay=5000';

  constructor(private http: HttpClient) {}

  // Fetch data from the API
  getDataPartners(): Observable<PartnerModel[]> {
    const dataResponse = this.http.get<PartnerModel[]>(this.apiUrl);
    return dataResponse;
  }
}
