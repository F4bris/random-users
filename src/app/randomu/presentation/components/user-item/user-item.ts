/**
 * @summary Presentation component that displays a single User resource card.
 * @author Fabrizio [Apellido]
 *
 * CONCEPT — Presentational component:
 * This component only receives data via @input() and displays it.
 * It has no knowledge of the API, store, or HTTP — pure UI logic.
 */

import { Component, inject, input } from '@angular/core';
import { User } from '../../../domain/model/user.entity';
import { TitleCasePipe } from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-user-item',
  imports: [
    MatCard,
    MatCardImage,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatIconButton,
    MatIcon,
    TranslatePipe,
    MatChip,
    TitleCasePipe,
  ],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css',
})
export class UserItem {
  /** The user to display — required input from the parent list component */
  user = input.required<User>();

  private snackBar = inject(MatSnackBar);

  /**
   * Opens the Random User website in a new browser tab.
   */
  goToWebsite(): void {
    window.open(this.user().websiteUrl, '_blank');
  }

  /**
   * Shares the user resource using the Web Share API,
   * or copies the URL to clipboard if sharing is not supported.
   */
  async shareResource(): Promise<void> {
    const shareData = {
      title: this.user().fullName,
      url: this.user().websiteUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        this.snackBar.open('Shared successfully!', 'Close', { duration: 3000 });
      } catch {
        this.snackBar.open('Sharing cancelled.', 'Close', { duration: 2000 });
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        this.snackBar.open('URL copied to clipboard!', 'Close', { duration: 3000 });
      } catch {
        this.snackBar.open('Could not copy URL.', 'Close', { duration: 2000 });
      }
    }
  }
}
