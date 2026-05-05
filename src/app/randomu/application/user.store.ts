/**
 * @summary Application-layer state container for Random User data.
 * @author Fabrizio [Apellido]
 *
 * CONCEPT — Store + Angular Signals:
 * The Store holds the app's state (users, loading flag, error).
 * Signals make the state reactive: when a signal changes, the UI updates automatically.
 * Components read from the Store — they never call the API directly.
 */

import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '../domain/model/user.entity';
import { RandomUserApi } from '../infrastructure/random-user-api';

@Injectable({ providedIn: 'root' })
export class UserStore {

  /** Private signal — only the store can write to it */
  private usersSignal   = signal<User[]>([]);
  private loadingSignal = signal<boolean>(false);
  private errorSignal   = signal<string | null>(null);

  private api = inject(RandomUserApi);

  /** Public computed — components read these (read-only) */
  readonly users   = computed(() => this.usersSignal());
  readonly loading = computed(() => this.loadingSignal());
  readonly error   = computed(() => this.errorSignal());

  /**
   * Loads users from the API and updates the internal signals.
   * Called once when the layout initializes.
   */
  loadUsers(): void {
    if (this.usersSignal().length > 0) return; // avoid re-fetching
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    this.api.getUsers().subscribe({
      next: users => {
        this.usersSignal.set(users);
        this.loadingSignal.set(false);
      },
      error: err => {
        this.errorSignal.set('Failed to load users. Please try again.');
        this.loadingSignal.set(false);
        console.error(err);
      }
    });
  }
}
