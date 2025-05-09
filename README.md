# Basic Activity Booking App API

A backend RESTful API for booking activities (Node.js + Express + MongoDB).

## Features

- User registration with secure password hashing (bcrypt)
- JWT authentication for user login and protected endpoints
- Public endpoint to list activities
- Authenticated endpoints to book activities and view user bookings
- Input validation using express-validator
- Clear JSON responses and robust error handling
- Welcome message at root API endpoint (`GET /`)

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT token-based auth
- **Validation:** express-validator
- **Password Security:** bcrypt

## Setup & Installation

1. **Clone the repository and install dependencies:**
   ```sh
   git clone https://github.com/SakshamChouhan/Basic-Activity-Booking-App.git
   cd Basic-Activity-Booking-App
   npm install
   ```
2. **Create a `.env` file in the root (see `.env.example`):**
   ```
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-secret-key
   PORT=5000
   ```
3. **Ensure MongoDB is running** (local or cloud Atlas).
4. **Start the server:**
   ```sh
   npm start
   ```

## Running & Testing

- The server will run on `http://localhost:5000` or your specified port.
- Visit `http://localhost:5000/` in a browser or with curl/Postman to see a welcome message.
- All API endpoints return JSON data (no front-end UI is included).

### API Endpoints

#### Home / Welcome
- `GET /`  
  _Returns a welcome message to verify the API is online._

#### Auth
- `POST /api/auth/register`  
  _Register a new user (JSON: name, email, phone, password)_
- `POST /api/auth/login`  
  _Login and receive a JWT token (JSON: email, password)_

#### Activities (Public)
- `GET /api/activities`  
  _List all activities._

#### Bookings (Authentication required: JWT token in `Authorization` header)
- `POST /api/bookings`  
  _Book an activity (JSON: activityId). Requires JWT token._
- `GET /api/bookings`  
  _Get all activities booked by the user. Requires JWT token._

### Example curl Requests

_Register:_
```sh
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"1234567890","password":"yourpassword"}'
```

_Login:_
```sh
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"yourpassword"}'
```
_Note: Use the JWT token returned for protected endpoints below._

_List Activities:_
```sh
curl http://localhost:5000/api/activities
```

_Book an Activity:_
```sh
curl -X POST http://localhost:5000/api/bookings \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"activityId": "YOUR_ACTIVITY_ID"}'
```

_Get My Bookings:_
```sh
curl http://localhost:5000/api/bookings \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Seeding Activities for Local Testing

If your `/api/activities` endpoint returns an empty array, you need to add some activities:
- You can insert data directly into MongoDB using Compass or `mongo` shell, or
- (For development) add a temporary POST route to `/routes/activities.js` as described in setup instructions.

### Deployment Notes

- Deploy the API using Render, Vercel, Cyclic, Railway, or other Node.js SaaS platforms.
- After deployment, all endpoint URLs are the same except for the base.  
  Example: `https://your-api-service.onrender.com/api/activities`
- The API will only accept HTTP (JSON) requests—no UI will be displayed in browsers, except the welcome message at `/`.

### Testing

- Use [Postman](https://www.postman.com/) or curl to test endpoints (see examples above).
- For protected endpoints, include your JWT token in the `Authorization: Bearer <token>` header.

## License

[MIT](LICENSE)

---
_This backend is intended as a core API for web/mobile apps or system integrations. For a frontend, connect a separate project or use OpenAPI/Swagger for visual exploration._
