/**
 * @summary Domain entity representing a Random User resource.
 * @author Fabrizio [Apellido]
 */

/**
 * Represents a single user from the Random User API.
 * This is the core domain model — it only holds data, no API or UI logic.
 */
export class User {
  /** Full name: "John Doe" */
  fullName: string;
  /** Profile picture URL (large size) */
  pictureUrl: string;
  /** Email address */
  email: string;
  /** Phone number */
  phone: string;
  /** City and country: "Lima, Peru" */
  location: string;
  /** Gender */
  gender: string;
  /** Age */
  age: number;
  /** Username */
  username: string;
  /** Nationality code: "US", "PE", etc. */
  nationality: string;
  /** Personal website URL (used for "Go To Website" button) */
  websiteUrl: string;

  constructor() {
    this.fullName    = '';
    this.pictureUrl  = '';
    this.email       = '';
    this.phone       = '';
    this.location    = '';
    this.gender      = '';
    this.age         = 0;
    this.username    = '';
    this.nationality = '';
    this.websiteUrl  = '';
  }
}
