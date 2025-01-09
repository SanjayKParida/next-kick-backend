# NextKick - Backend
[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)](#)

- Backend service for the FlickIt Sports Application, handling user authentication, football drill management, and leaderboard functionality. Built with AWS Lambda functions and MongoDB Atlas.

## ⚡️ Features
- RESTful APIs for NextKick android application.
- Authentication and authorization (JWT)
- Database management for users, drills & leaderboard.
- Scalability and performance optimizations.

## 👩‍💻 Technologies Used
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB Atlas**: NoSQL database for data storage
  
## ⏳ Installation
1. Clone the repository:
   ```
   git clone https://github.com/SanjayKParida/market-sphere-backend.git
   ```
2. Navigate to the project directory:
   ```
   cd market-sphere-backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

5. Create a .env file and add the necessary environment variables
   ```
   PORT=5000
   mongoDbUrl=your-mongodb-connection-string
   ```
   
6. Start the server
   ```
   npm start
   ```

## REST APIs Documentation
### Authentication
- Signup
   ```
   POST /api/signup
  ```
- Login
 ```
   POST /api/signin
  ```

### Drills
- Fetch all drills
  ```
   GET /api/drills
   ```
- Fetch Single Drill
  ```
   GET /api/drills/:id
   ```
- Save completed Drill
  ```
   POST /api/user-drills
   ```
- Fetch user completed drills
 ```
   GET /api/user-drills/:userId
   ```

### Leaderboard
- Fetch global leaderboard
  ```
   GET /api/leaderboard
   ```
- Fetch specific user's ranking
  ```
   POST /api/leaderboard/user/:userId
   ```
  
## 🌍 Contributions

Contributions are welcome! Fork the repository and submit a pull request with your changes.

  
