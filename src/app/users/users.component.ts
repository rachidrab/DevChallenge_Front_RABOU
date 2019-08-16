import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserInfos} from '../Classes/user-infos';
import {UserService} from '../services/user.service';
import {Album} from '../Classes/album';
import {Photo} from '../Classes/photo';
import {AuthService} from '../auth/auth.service';
import {TokenStorageService} from '../auth/token-storage.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  showHideUserDetails = true;
  u: UserInfos ;
  album: Album;
  isLoggedIn = false;
  roles: string[] = [];





  users: Observable<UserInfos[]>;
  albums: Observable<Album[]>;
  photos: Observable<Photo[]>;





  constructor(private userService: UserService, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.reloadData();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }


  }

  reloadData() {
    this.users = this.userService.getAllUsers();
  }



  showDetails(user: UserInfos) {

    this.u = user;
    this.albums = this.userService.getAlbumsByUserId(this.u.id);

  }

  showPhotos(album: Album) {
    this.album = album;
    this.photos = this.userService.getPhotosByAlbumId(this.album.id);

  }


}
