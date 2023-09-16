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
      "name": "Shemaar Moore",
      "address": "Nairobi, Kenya"
    }
    ```

### READ a Person's details:
- GET `/api/:user_id`

### UPDATE a Person's details:
- PUT `/api/:user_id`
  - Body: 
    ```json
    {
      "name": "Shemaar Frankline Moore",
    }
    ```

### DELETE a Person:
- DELETE `/api/:user_id`
