import { MockProvider } from 'ng-mocks';
import { TestBed } from '@angular/core/testing';
import { ApiService } from '@fe-core/services/api/api.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, MockProvider(ApiService)],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
