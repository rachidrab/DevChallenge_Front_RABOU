import { TestBed } from '@angular/core/testing';

import { UserInfosServiceService } from './user-infos-service.service';

describe('UserInfosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInfosServiceService = TestBed.get(UserInfosServiceService);
    expect(service).toBeTruthy();
  });
});
