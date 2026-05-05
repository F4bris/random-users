/**
 * @summary Raw response contract for the Random User API endpoint.
 * @author Fabrizio [Apellido]
 *
 * These interfaces mirror exactly what the API returns.
 * They are NOT domain entities — they represent the external data shape.
 */

/** Single user resource returned by the Random User API */
export interface UserResource {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
  };
  email: string;
  login: {
    username: string;
  };
  dob: {
    age: number;
  };
  phone: string;
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

/** Full response envelope from GET /api/?results=5 */
export interface UsersResponse {
  results: UserResource[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
