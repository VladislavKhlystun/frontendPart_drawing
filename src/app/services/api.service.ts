import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/user';
import { HttpHeaders } from '@angular/common/http';

@Injectable() 
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public postData (user : User) {
    const myHeader = new HttpHeaders().set('Authorization', 'ура_мой_токен');
    const body = {username: user.username, email: user.email, password: user.password};
    return this.httpClient.post('http://localhost:8888/api/register', body, {headers:myHeader})
  }
}

/* не знаю как послать токен, при пост запросах с помощью postman в базе сохраняет нового 
пользователя, но постоянно вылетает ошибка Class jwt-auth does not exist. 
по идее не работает jwt-auth
*/