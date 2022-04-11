import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient: HttpClient) {
  }

  get(APIPath: string) {
    return this.httpClient.get<any>(`${environment.apiURL}${APIPath}`);
  }
}
