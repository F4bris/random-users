# PC1 - Random User Resources Catalogue

## Description
An Angular web application that displays random user profiles fetched from the Random User API. Built for the Open Source Development course (1ASI0729), NRC 7380.

## Features
- Displays 5 random users in Material Design cards
- Each card shows: profile photo, full name, username, email, phone, location, age, gender, nationality
- "Go To Website" button opens the Random User site in a new tab
- "Share Resource" button uses the Web Share API (or clipboard fallback)
- Language switcher EN | ES using ngx-translate
- Angular Signals for state management
- Domain-Driven Design architecture

## Tech Stack
| Package | Purpose |
|---|---|
| Angular 21 | Frontend framework |
| Angular Material | UI component library |
| @ngx-translate | Internationalization |
| HttpClient | HTTP communication |
| Angular Signals | State management |

## Architecture
```
src/app/
├── shared/              # Generic components (toolbar, footer, layout)
│   ├── infrastructure/  # LogoDevApi
│   └── presentation/components/
├── randomu/             # Random User subdomain
│   ├── domain/model/    # User entity
│   ├── infrastructure/  # RandomUserApi, UserAssembler, UsersResponse
│   ├── application/     # UserStore (Signals)
│   └── presentation/components/
│       ├── user-item/   # Single user card
│       └── user-list/   # Grid of cards
├── environments/
└── public/i18n/
```

## Author
- Code: u202019287
- Name: Fabrizio [Apellido]
- Course: 1ASI0729 - Desarrollo de Aplicaciones Open Source
- NRC: 7380
