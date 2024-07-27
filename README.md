# Project Name

This project is a backend implementation using Node.js, Express.js, PostgreSQL. It includes user authentication, password reset functionality, user management, and a dashboard with various MUI components.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=5151
    DATABASE_URL=your_database_url
    JWT_SECRET=your_jwt_secret
    ```

4. Run the server:
    ```bash
    npm start
    ```

## Usage

1. **User Login**
    - Endpoint: `POST /api/login`
    - Request Body:
      ```json
      {
          "email": "user@example.com",
          "password": "password123"
      }
      ```

2. **User Registration**
    - Endpoint: `POST /api/signup`
    - Request Body:
      ```json
      {
          "name": "John Doe",
          "email": "john@example.com",
          "password": "password123"
      }
      ```

3. **Password Reset Request**
    - Endpoint: `POST /api/forgot-password`
    - Request Body:
      ```json
      {
          "email": "user@example.com"
      }
      ```

4. **Get All Users (Protected Route)**
    - Endpoint: `GET /api/users`
    - Headers:
      ```json
      {
          "Authorization": "Bearer <token>"
      }
      ```

## API Endpoints

- `POST /api/login`: User login
- `POST /api/signup`: User registration
- `POST /api/forgot-password`: Password reset request
- `GET /api/users`: Get all users (protected route)

## Features

- **User Authentication**: Secure login and signup with JWT tokens.
- **Password Reset Functionality**: Request password reset link via email.
- **User Management**: Retrieve a list of all users (protected route).
- **Dashboard**: Includes various MUI components for enhanced user interface.

## Technologies

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
