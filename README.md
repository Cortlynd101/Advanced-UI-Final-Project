# Advanced-UI-Final-Project

## For this project I wanted to do a website that allows you to look at movie listings for a large movie theatre.
   - It also allows you to purchase tickets and snacks before heading to the theatre.
   - Tickets can be purchased in specifc show rooms and specific seats can be purchased from a UI that allows the user to see which tickets have already been taken.
   - Allows them to select the tickets they want before purchase.
   - Tickets and purchased snacks would then be sent to the email of the person who purchased them (or put on a page where they can view their QR codes).
   - They can redeem their QR codes when they show up to the theatre.
## I will be doing this project individually.
## Feature List:
   - The website will need a front page that displays the movies that are currently in the theatre.
   - There will be a page that shows upcoming movies.
   - There will be a page that allows the user to view details of any movie they select.
   - There will be a page that allows the user to purchase snacks before the movie.
   - There will be a page that allows the user to buy specific tickets from an interactive UI that shows all the tickets in the show room they've selected.
   - The showroom will need a database that keeps track of movies and when they're in the theatre.
   - It keeps track of user accounts for the purpose of allowing users to purchase tickets and snacks.
   - The database will need to keep track of which tickets have been purchased.
   - It will also need the ability to send emails to users when they buy tickets/snacks that include redeemable QR codes (or it will be a page where they can view their QR codes).
## Things I will need to accomplish:
   - I always end up creating very sterile websites when I make them for projects, so I wanted to make one that is a little more fun for once.
   - For this website I would need to do that, since movie theatres almost always go for a more upbeat "popcorn" kind of vibe. That would be an interesting new challenge.
   - I would also need to create an interactive UI to showcase the seats that are available in a theatre, which would have to be more difficult than any UI I've made in the past.
   - Lastly, I would also have to send emails to users when they purchase tickets/snacks as well as generate QR codes which isn't something I've done using React before. 

## Goals by Week
- [X] Nov 6
    - [X] Users can login using Authentication.
- [X] Nov 9
    - [X] Docker and Kubernetes are setup and the site is visitable on duckdns.
    - [X] Includes having a user see movies from the database. 
- [X] Nov 13
    - [X] Users can view the movies that are currently in the theatre, as well as the details of those movies.
    - [X] 1/2 Users can also view the upcoming movies and when they will visit the theatre.
    - [X] 2/2 Users can also view the upcoming movies and when they will visit the theatre (second part because its not all the way done).
- [X] Nov 16
    - [X] 1/3 User can purchase tickets from the interactive UI in each theatre available.
    - [X] 2/3 User can purchase tickets from the interactive UI in each theatre available.
    - [X] 3/3 User can purchase tickets from the interactive UI in each theatre available.
    - [X] User will not be able to purchase tickets that are already purchased. Those UI elements will be disabled.
- [X] Nov 20
    - [X] 1/3 Users can view the available snacks and purchase them as well.
    - [X] 2/3 Users can view the available snacks and purchase them as well.
    - [X] 3/3 Users can view the available snacks and purchase them as well.
- [X] Nov 23
    - [X] 1/2 User can view their QR codes on the profile after purchasing tickets/snacks.
    - [ ] 2/2 User can view their QR codes on the profile after purchasing tickets/snacks.
- [X] Nov 26
    - [X] Overall UI polish/adding extra features/catchup if needed. 
- [X] Dec 4
    - [ ] User gets sent an email with the QR codes for their order instead of the page that shows them their QR codes.
     
## Rubric
| Points | Section    | Requirement                                                      |
| ------ | -----      | ---------------------------------------------------------------- |
| 12/20    | General    | Professional, organized and smooth experience
| 17/30    | Scope      | Is 2 to 3 times larger than Inventory Management
| 04/5     | Experience | All experiences mobile friendly
| 02/5     | Experience | 3 instances where elements reorder themselves on smaller screens
| 00/5     | Technology | Use local storage
| 00/5     | Technology | Client side state stores (e.g. tanstack query or context)
| 04/5     | Technology | Toasts / global notifications or alerts
| 03/5     | Technology | Error handling (both on api requests and render errors)
| 05/5     | Technology | Network Calls that read and write data
| 00/5     | Technology | Developer type helping (typescript)
| 04/5     | Technology | 10+ pages or views
| 05/5     | Technology | CI/CD pipeline
| 00/5     | Technology | Tests run in pipeline, pipeline aborts if they fail
| 05/5     | Technology | linting in pipeline
| 00/9     | Technology | 3+ generic form input components
| 00/12    | Technology | 4+ generic layout components
| 10/10    | Technology | Authentication and user account support
| 00/5     | Technology | Authorized pages and public pages
