/**
 * @summary Assembler that maps raw API resources into User domain entities.
 * @author Fabrizio [Apellido]
 *
 * CONCEPT — Assembler pattern:
 * The API returns data in its own shape (UserResource).
 * The Assembler translates that shape into our domain entity (User).
 * This isolates the domain from changes in the external API contract.
 */

import { UserResource, UsersResponse } from './users-response';
import { User } from '../domain/model/user.entity';

export class UserAssembler {

  /**
   * Converts a single raw UserResource into a User entity.
   * @param resource - Raw object from the Random User API.
   * @returns A populated User entity.
   */
  static toEntityFromResource(resource: UserResource): User {
    const user = new User();
    user.fullName    = `${resource.name.first} ${resource.name.last}`;
    user.pictureUrl  = resource.picture.large;
    user.email       = resource.email;
    user.phone       = resource.phone;
    user.location    = `${resource.location.city}, ${resource.location.country}`;
    user.gender      = resource.gender;
    user.age         = resource.dob.age;
    user.username    = resource.login.username;
    user.nationality = resource.nat;
    // Build a plausible website URL from the username
    user.websiteUrl  = `https://randomuser.me`;
    return user;
  }

  /**
   * Converts the full API response into a list of User entities.
   * @param response - The full UsersResponse from the API.
   * @returns Array of User entities.
   */
  static toEntitiesFromResponse(response: UsersResponse): User[] {
    return response.results.map(resource => this.toEntityFromResource(resource));
  }
}
