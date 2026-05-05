/**
 * @summary Presentation component that renders the full User Resources Catalogue.
 * @author Fabrizio [Apellido]
 */

import { Component, input } from '@angular/core';
import { User } from '../../../domain/model/user.entity';
import { UserItem } from '../user-item/user-item';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-user-list',
  imports: [UserItem, TranslatePipe],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  /** Array of users to display — received from the layout via the store */
  users = input.required<User[]>();
}
