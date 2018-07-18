import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/user';
import { HttpHeaders } from '@angular/common/http';

const API_ENDPOINT = 'http://localhost:8888/api';

@Injectable() 
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Send register request to API 
   * 
   * @param user 
   * @returns {Observable}
   */
  public register (user : User) {
    const { username, email, password } = user;
    return this.httpClient.post( API_ENDPOINT + '/register', { username, email, password });
  }
}

/* не знаю как послать токен, при пост запросах с помощью postman в базе сохраняет нового 
пользователя, но постоянно вылетает ошибка Class jwt-auth does not exist. 
по идее не работает jwt-auth
*/