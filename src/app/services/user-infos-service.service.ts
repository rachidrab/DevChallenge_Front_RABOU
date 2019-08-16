import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserInfosServiceService {

  private usersUrl: string;
  private albumsURL: string;

  constructor(private http: HttpClient) {

  }


  public findAll(): Observable<any> {
    return this.http.get(`${this.usersUrl}`);
  }


  public getAlbumsByUserId(): Observable<any> {
    return this.http.get(`${this.albumsURL}`);
}

}
