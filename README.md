# Documentation

## Description

The project was completed using NodeJS, express as framework and MongoDB for the database. I preferred to work only on the backend side, and to see the results with the help of Postman. This project is defined by the desire to start working with middleware, to learn better what it is and to understand why it is more and more used nowadays.

## Features

- I created all the CRUD functions for the user model in the application
- If errors occur in the application and we want to manage them, I have created a middleware that can customize each error to your liking
- I have created a middleware that protects the routes that are intended only for customers who are registered on the platform. If a "ghost user" wants to access a route that is protected it will receive an error in the form "Access denied"

## Usage

### Env Variables

Create .env file in then root and add the following

```
PORT = xxxx ( e.g 5000 )
TYPE = xxxx ( You have to choose between 'production' and 'development' )
MONGO_URI = YOUR_MONGO_URI
```

### Install Dependencies

```
npm install
```

### Run The Application

```
npm run server
```

## License

The MIT License

Copyright (c) 2021 Dumitrache Florentin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
