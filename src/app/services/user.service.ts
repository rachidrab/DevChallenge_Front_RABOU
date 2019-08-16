import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserInfos} from '../Classes/user-infos';
import {Album} from '../Classes/album';
import {Photo} from '../Classes/photo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private usersUrl = 'http://localhost:8080/api/core/users';
  private albumsUrl = 'http://localhost:8080/api/core/albums/user/';
  private photosUrl = 'http://localhost:8080/api/core/photos/album/';
  private AllAlbumsURL = 'http://localhost:8080/api/core/albums';


  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<UserInfos[]> {
    return this.http.get<UserInfos[]>(this.usersUrl);
  }

  getAlbumsByUserId(id: string): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl + id);
  }

  getPhotosByAlbumId(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl + id);
  }

  getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.AllAlbumsURL);
  }



}
