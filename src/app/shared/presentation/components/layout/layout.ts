/**
 * @summary Root layout component. Composes toolbar, user list and footer.
 * @author Fabrizio [Apellido]
 *
 * CONCEPT — Layout component:
 * This is the "orchestrator" component. It injects the Store,
 * triggers the data load, and passes the data down to child components.
 */

import { Component, inject, OnInit } from '@angular/core';
import { Footer } from '../footer/footer';
import { MatToolbar } from '@angular/material/toolbar';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { UserList } from '../../../../randomu/presentation/components/user-list/user-list';
import { UserStore } from '../../../../randomu/application/user.store';
import { LogoDevApi } from '../../../infrastructure/logo-dev-api';
import { TranslatePipe } from '@ngx-translate/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-layout',
  imports: [
    Footer,
    MatToolbar,
    LanguageSwitcher,
    UserList,
    TranslatePipe,
    MatProgressSpinner,
  ],
  templateUrl: './layout.html',
  styleUrl:    './layout.css',
})
export class Layout implements OnInit {
  protected store    = inject(UserStore);
  protected logoApi  = inject(LogoDevApi);

  protected readonly users   = this.store.users;
  protected readonly loading = this.store.loading;
  protected readonly error   = this.store.error;

  protected logoUrl = this.logoApi.getUrlToLogo('https://randomuser.me');

  ngOnInit(): void {
    this.store.loadUsers();
  }
}
