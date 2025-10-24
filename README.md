# Hotel Management API
This API provides full CRUD operations for managing hotel Rooms, Guests, and Bookings. It connects to MongoDB Atlas.

# Base URL
https://hotel-3-ko5c.onrender.com

# API Endpoints
# Rooms
| Method | Endpoint     | Description         |                                                    
| ------ | ------------ | ------------------- |
| POST   | `/rooms`     | Create a new room   | 
| GET    | `/rooms`     | Get all rooms       |
| GET    | `/rooms/:id` | Get a room by ID    |                                                                   
| PUT    | `/rooms/:id` | Update a room by ID |
| DELETE | `/rooms/:id` | Delete a room by ID | 

# Guests
| Method | Endpoint      | Description          |                                                        
| ------ | ------------- | -------------------- | 
| POST   | `/guests`     | Create a new guest   | 
| GET    | `/guests`     | Get all guests       |
| GET    | `/guests/:id` | Get a guest by ID    |
| PUT    | `/guests/:id` | Update a guest by ID | 
| DELETE | `/guests/:id` | Delete a guest by ID | 

# Bookings
| Method | Endpoint        | Description            |                                                                                                                                   
| ------ | --------------- | ---------------------- | 
| POST   | `/bookings`     | Create a new booking   | 
| GET    | `/bookings`     | Get all bookings       |
| GET    | `/bookings/:id` | Get a booking by ID    |                                                                                                                                                     
| PUT    | `/bookings/:id` | Update a booking by ID |                                                                                                                            
| DELETE | `/bookings/:id` | Delete a booking by ID |                                                                                                                                                       

# Postman Testing
* Rooms
  POST https://hotel-3-ko5c.onrender.com/api/rooms
  
Body (JSON):
{
  "number": 101,
  "type": "Single",
  "price": 100,
  "status": "available"
}

* Get All Rooms
  GET https://hotel-3-ko5c.onrender.com/api/rooms

* Update Room
  PUT https://hotel-3-ko5c.onrender.com/api/rooms/{roomId}
  
Body (JSON):
{
  "number": 101,
  "type": "Single",
  "status": "occupied",
  "price": 120
}

DELETE https://hotel-3-ko5c.onrender.com/api/rooms/{roomId}

* Guests
  POST https://hotel-3-ko5c.onrender.com/api/guests
Body (JSON):
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}


* Get All Guests
  GET https://hotel-3-ko5c.onrender.com/api/guests

* Update Guest
  PUT https://hotel-3-ko5c.onrender.com/api/guests/{guestId}
Body (JSON):
{
  "name": "John Doe",
  "email": "john@example.com"
  "phone": "0987654321"
}


*Delete Guest
 DELETE https://hotel-3-ko5c.onrender.com/api/guests/{guestId}


*Bookings

POST https://hotel-3-ko5c.onrender.com/api/bookings
Body (JSON):
{
  "guestId": "60d0fe4f5311236168a109ca",
  "roomId": "60d0fe4f5311236168a109cb",
  "checkIn": "2025-11-01",
  "checkOut": "2025-11-05",
  "status": "booked"
}

*Get All Bookings
  GET https://hotel-3-ko5c.onrender.com/api/bookings

*Update Booking
 PUT https://hotel-3-ko5c.onrender.com/api/bookings/{bookingId}
Body (JSON):
{
  "guestId": "60d0fe4f5311236168a109ca",
  "roomId": "60d0fe4f5311236168a109cb",
  "checkIn": "2025-11-01",
  "checkOut": "2025-11-05",
  "status": "checked-in"
}

*Delete Booking
 DELETE https://hotel-3-ko5c.onrender.com/api/bookings/{bookingId}



  
