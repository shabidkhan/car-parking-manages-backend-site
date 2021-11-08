<h1 align="center">
    <b>Car parking manages backend site<br> Node.js using MongoDB </b> 
<br>
</h1>


<p align="center">
  <a href="/LICENSE"><img src="https://img.shields.io/github/license/shabidkhan/IMDB-scraper.svg?style=flat-square"></a>
</p>


## What is this for?
This is a Simple Car parking manages backend site done with ExpressJS framework of NodeJS using MongoDB as the data store, Express as the routing system and of course Mongoose to make interacting with Mongo from Node easy.

## Getting Started

## Running the tests

### •Park a Car:
Allows to park a car in  a  empty slot. `car_number` is a varaible in this  `/parking_car/:car_number`  url.

<!-- The vriable will conatine a number and it will  -->
This will give you token when the car  successfully parked in the parking area.

If slot fulled then user has to wait for empty it.<br>
eg. `/parking_car/UP16 SS7777`


### •Unpark a Car:
.`/unparking_car/:slot`
The slot variable will contain the car number or slot nummber.By this number 
When the user leave the parking area then  the place/slot will be ready to reassgin to others.<br>
eg. `/unparking_car/1`

### •Car slot information:
`/car_info/:Slot`
The  information will be retrive through the slot variable.<br>
eg. `/car_info/1`

### DataBase:
Here we use **[MongoDB](https://www.mongodb.com/)** as the database. Here we have one collection created, named as:
- cars.

<br>
<br>

## Prerequisites
Tools that we need to run this app:

- ***[Node.js](https://nodejs.org/)***
- ***[Express.js](https://expressjs.com/)***
- ***[Node Package Manager](https://www.npmjs.com/get-npm)***
- ***[MongoDB](https://www.mongodb.com/)***

## Installing
```
npm install
```
## Connection to DataBase Access
At line 4 on ```./db/db.js``` change ***```process.env.dbUrl```*** with your DataBase Url or create a ```.env``` file with ***```dbUrl = <your_DataBase_Url>```*** .

## To Run the App
```
node bin/www
```

The server will start Running on
+ http://localhost:5000/


## Author

| Author                | Profile Link                                       |
| --------------------- | :------------------------------------------------- |
| **Shabid Khan** | **[Shabid Khan](https://github.com/shabidkhan)** |
