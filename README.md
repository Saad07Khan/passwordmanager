# Password Manager with MongoDB

A secure password management application built with React frontend and Node.js backend with MongoDB database.

## Features

- ✅ Add, edit, and delete passwords
- ✅ Secure password storage in MongoDB
- ✅ Copy passwords to clipboard
- ✅ Show/hide password functionality
- ✅ Modern UI with Tailwind CSS
- ✅ Toast notifications
- ✅ Responsive design

## Prerequisites

Before running this application, make sure you have the following installed:

1. **Node.js** (v14 or higher)
2. **MongoDB** (v4.4 or higher)
3. **npm** or **yarn**

## Setup Instructions

### 1. Install MongoDB

If you haven't installed MongoDB yet, you can:

- **Windows**: Download and install from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
- **macOS**: Use Homebrew: `brew install mongodb-community`
- **Linux**: Follow the [official installation guide](https://docs.mongodb.com/manual/installation/)

### 2. Start MongoDB

Start the MongoDB service:

```bash
# Windows (if installed as a service)
# MongoDB should start automatically

# macOS/Linux
sudo systemctl start mongod
# or
brew services start mongodb-community
```

### 3. Clone and Setup the Project

```bash
# Navigate to the project directory
cd passmongo

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ..
npm install
```

### 4. Configure Environment Variables

The backend `.env` file is already configured with:
```
MONGO_URI = mongodb://localhost:27017
DB_NAME = passwordmanager
```

If you're using a different MongoDB setup, update the `MONGO_URI` accordingly.

### 5. Run the Application

You'll need to run both the backend and frontend servers:

#### Terminal 1 - Backend Server
```bash
cd passmongo/backend
npm start
```

The backend server will start on `http://localhost:3000`

#### Terminal 2 - Frontend Server
```bash
cd passmongo
npm run dev
```

The frontend application will start on `http://localhost:5173`

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Add passwords by filling in the website URL, username, and password
3. Click "Add Password" to save
4. Use the copy icons to copy website, username, or password to clipboard
5. Use the edit icon to modify existing passwords
6. Use the delete icon to remove passwords

## Project Structure

```
passmongo/
├── backend/
│   ├── server.js          # Express server with MongoDB connection
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables
├── src/
│   ├── component/
│   │   ├── Manager.jsx    # Main password management component
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Footer.jsx     # Footer component
│   ├── App.jsx           # Main app component
│   └── main.jsx          # App entry point
├── public/
│   └── icons/            # Application icons
└── package.json          # Frontend dependencies
```

## API Endpoints

- `GET /` - Fetch all passwords
- `POST /` - Save a new password
- `DELETE /` - Delete a password by ID

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, React Toastify
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB
- **Other**: UUID for unique IDs

## Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running on your system
- Check if the MongoDB service is started
- Verify the connection string in `.env` file

### Port Issues
- If port 3000 is in use, change the port in `backend/server.js`
- If port 5173 is in use, Vite will automatically use the next available port

### Dependencies Issues
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## Security Notes

- This is a basic implementation for learning purposes
- In production, consider adding:
  - Password encryption
  - User authentication
  - HTTPS
  - Input validation
  - Rate limiting

## License

This project is for educational purposes.
