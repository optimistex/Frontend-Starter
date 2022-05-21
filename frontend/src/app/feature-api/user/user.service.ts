import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '@fe-core/services/models/user';
import { ApiService } from '@fe-core/services/api/api.service';

@Injectable()
export class UserService {
  constructor(private apiService: ApiService) {
  }

  public getUsers(parameters: { page?: number; limit?: number }): Observable<User[]> {
    return this.apiService.get<User[]>('userListApi', {
      ...(parameters.page ? { _page: parameters.page } : {}),
      ...(parameters.limit ? { _limit: parameters.limit } : {}),
    }).pipe(map(response => response.map(r => new User(r))));
  }
}
