# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Coolor Pallete #12130F,#5B9279,#8FCB9B,#EAE6E5,#8F8073..

| Method | Path                     | Purpose                                          |
| ------ | ------------------------ | ------------------------------------------------ |
| Get    | /                        | Home Page                                        |
| Get    | /places                  | Places index page                                |
| Post   | /places                  | Create new place                                 |
| Get    | /places/new              | Form page for creating a new place               |
| Get    | /places/:id              | Details about a particular place                 |
| Put    | /places:id               | Update a particular place                        |
| Get    | /places/:id/edit         | Form page for editing an existing place          |
| Delete | /places/:id              | Delete a particular place                        |
| Post   | /places/:id/rant         | Create a rant (comment) about a particular place |
| Delete | /places/:id/rant/:randId | Delete a rant (comment) about a particular place |
| Get    | \*                       | 404 page (matches any route not defined above)   |
