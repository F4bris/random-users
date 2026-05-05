/**
 * @summary Infrastructure gateway to the Random User external API.
 * @author Fabrizio [Apellido]
 *
 * CONCEPT — Infrastructure layer:
 * This class is the only place in the app that knows about the external API URL.
 * It fetches raw data and uses the Assembler to return clean domain entities.
 */

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../domain/model/user.entity';
import { UsersResponse } from './users-response';
import { UserAssembler } from './user-assembler';

@Injectable({ providedIn: 'root' })
export class RandomUserApi {
  private readonly baseUrl = 'https://randomuser.me/api/';
  private http = inject(HttpClient);

  /**
   * Fetches 5 random users and maps them to domain entities.
   * @returns Observable of User array.
   */
  getUsers(): Observable<User[]> {
    return this.http
      .get<UsersResponse>(this.baseUrl, { params: { results: '5' } })
      .pipe(
        map(response => UserAssembler.toEntitiesFromResponse(response))
      );
  }
}
