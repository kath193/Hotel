# Hotel Management API
This API provides full CRUD operations for managing hotel Rooms, Guests, and Bookings. It connects to MongoDB Atlas.

# Base URL


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
  POST http://localhost:5000/api/rooms
  
Body (JSON):
{
  "number": 101,
  "type": "Single",
  "price": 100,
  "status": "available"
}

* Get All Rooms
  GET http://localhost:5000/api/rooms

* Update Room
  PUT http://localhost:5000/api/rooms/{roomId}
  
Body (JSON):
{
  "status": "occupied",
  "price": 120
}

DELETE http://localhost:5000/api/rooms/{roomId}

* Guests
  

  
