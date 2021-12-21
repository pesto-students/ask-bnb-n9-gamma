
# AskBnB - Hotel Room Booking Frontend Application

## Overview

**AskBnB** is an online hotel room booking application. The application is designed
for users who are planning to travel to some destination and want to book their stays in advance. 

It allows users search and book hotel rooms online based on location, checkin and checkout dates and number of 
guests.

Welcome! We hope you enjoy this app as much as we enjoyed making it. 

# Table of Content

1. [Demo](#demo)
2. [Installation](#installation)
3. [Technology Stack](#technology-stack)
4. [Authors](#authors)
5. [License](#license)
6. [Features](#features)
7. [Pages/Components](#pagescomponents)
8. [Environment Variables](#environment-variables)
9. [Authors](#authors)
<br/>

## Demo

[Live Demo](https://admiring-wing-bac7ac.netlify.app/)
<br/>

Test Credentials:

- For Booking Rooms
  - Email: pesto@pesto.tech
  - Password: pesto@123

## Installation

- Fork or directly clone this repository to your local machine
- Use the `npm` command to install dependencies
- Once the dependencies are finished installing, use the `npm run start` command inside the root directory to open the app in your local browser of choice

<br/>

# Technology Stack

We tried to use a completely modern tech stack while testing out some new technologies that we had never used before. This resulted in a fast, performant, and easily-extensible web app that should be fairly future-proof for the coming next several years. We used:

- [Sematic UI React](https://react.semantic-ui.com/)
- [React Google Login](https://www.npmjs.com/package/react-google-login)
- [Moment-Range](https://github.com/rotaready/moment-range)
- [Axios](https://axios-http.com/docs/intro)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Redux](https://react-redux.js.org/)

<br/>

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

![Desktop Layout](https://github.com/pesto-students/ask-bnb-n9-gamma/blob/master/src/assets/screenshot/hotelList.png)

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



## Environment Variables
To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL` = Your backend server endpoint


## Authors

- [Arvinth Chandrashekaran](https://github.com/ArvinthC3000)
- [Shahid Barbhuiya](https://github.com/Shahid-prog)


