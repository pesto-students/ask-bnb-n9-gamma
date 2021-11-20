
# AskBnB - Hotel Room Booking Frontend Application

## Overview

**AskBnB** is an online hotel room booking application. The application is designed
for users who are planning to travel to some destination and want to book their stays in advance. 

It allows users search and book hotel rooms online based on location, checkin and checkout dates and number of 
guests.





## Features
The application provides the following features -
- Search hotels based on location, checkin and checkout dates and number of guests.
- Present list of available hotels meeting search criteria.
- Select rooms from an available hotel.
- Register and login (both local and Google OAuth2.0).
- Book hotel rooms by making online payment.
- See booking history for logged in user.


## Pages/Components

### Home

```
ROUTE /
```
This page is used to search for hotels based on location, checkin, checkout dates and 
number of guests.

![Desktop Layout](https://github.com/pesto-students/ask-bnb-n9-gamma/blob/master/src/assets/screenshot/home.png)

### Hotels List

```
ROUTE /list
```

This page shows the list of all available hotels that match the search criteria.

![Desktop Layout](https://github.com/pesto-students/ask-bnb-n9-gamma/blob/master/src/assets/screenshot/home.png)

### Hotel Details

```
ROUTE /hotel/:hotelId
```
This page allows the selection of rooms from the selected hotel in previous step for booking.

![Desktop Layout](https://github.com/pesto-students/ask-bnb-n9-gamma/blob/master/src/assets/screenshot/roomsDetail.png)

### Signin/Signup

```
ROUTE /auth
```
This page is used to register new users, login registered users using local strategy
or Google OAuth2.0 client.

![Desktop Layout](https://github.com/pesto-students/ask-bnb-n9-gamma/blob/master/src/assets/screenshot/authentication.jpg)

### Booking & Payment

```
ROUTE /booking
```

This is used to confirm the booking details and make payment for booking.

![Desktop Layout](https://github.com/pesto-students/ask-bnb-n9-gamma/blob/master/src/assets/screenshot/booking.jpg)

### Booking History

```
ROUTE /bookinghistory
```
The currently logged in user can view his booking history from this page.

![Desktop Layout](https://github.com/pesto-students/ask-bnb-n9-gamma/blob/master/src/assets/screenshot/booking_history.jpg)

## Tech Stack

**Libraries:** React, Redux

**CSS Frameworks:** React Semantic UI, CSS Modules

**Languages:** Javascript 

**Deployment:** Heroku

**SCM:** Git

**Tools:** VS Code, ESLint, Prettier, Webpack, Moment


## Installation

To install the project, rup command

```bash
  npm install
```
To test the project, run command

```bash
  npm run test
```
To build the project, run command

```bash
  npm run build
```
## Authors

- [@Arvinth Chandrashekaran](https://github.com/ArvinthC3000)
- [@Shahid Barbhuiya](https://github.com/Shahid-prog)
- [@Kaushlendra Singh Parihar](https://github.com/Kaus1247)


