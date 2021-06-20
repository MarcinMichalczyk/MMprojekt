import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Menu } from '../models/menu';
const baseUrl = 'http://localhost:60699/api/Menus';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }
  getById(id: number) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(menu: Menu) {
    return this.http.post(baseUrl, menu);
  }
  update(id: number, menu: Menu) {
    return this.http.put(`${baseUrl}/${id}`, menu);
  }
  deleteById(id: number) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
