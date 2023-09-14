# People API

## Setup:
1. Clone this repo.
2. Run `npm install`.
3. Start the server with:
 `start-dev": "set NODE_ENV=development && nodemon app.js` or,
 `start-prod": "set NODE_ENV=production && node app.js`.

## API Endpoints:

### CREATE a Person:
- POST `/api`
  - Body: 
    ```json
    {
      "name": "John",
      "age": 30,
      "address": "123 Street"
    }
    ```

### READ a Person's details:
- GET `/api/:id`

### UPDATE a Person's details:
- PUT `/api/:id`
  - Body: 
    ```json
    {
      "name": "John Doe",
      "age": 31
    }
    ```

### DELETE a Person:
- DELETE `/api/:id`
