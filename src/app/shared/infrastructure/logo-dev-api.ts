import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
/**
 * Infrastructure gateway for generating source logo URLs using logo dev
 */
export class LogoDevApi {
  baseUrl =environment.logoProviderApiBaseUrl;
  apiKey = environment.logoProviderPublishableKey;

  constructor() {}

  /**
   * Builds the logo URL for a source website
   * @param url A string value containing the website URL
   */
  getUrlToLogo(url: string) : string {
    return `${this.baseUrl}${new URL(url).hostname}?token=${this.apiKey}`;
  }
}


