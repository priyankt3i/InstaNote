# InstaNote - Save, Sync, and Chat with Your Notes!

InstaNote is a powerful tool that lets you save URLs, documents, images, or notes and then interact with them through natural language. Available as a browser extension and mobile app (iOS and Android), InstaNote syncs your data across devices via the cloud, allowing you to easily access and chat with your saved information.

## Project Structure

```
InstaNote/
├── instanote-extension/       # Browser Extension
├── instanote-backend/         # Backend API (Node.js/Express)
├── instanote-app/             # Mobile App (React Native)
├── README.md                  # Project overview and setup instructions
└── LICENSE                    # License file for the project
```

### Features

- **Browser Extension**: Save the current webpage URL or text content directly from your browser.
- **Sync Across Devices**: Automatically sync saved data between the browser extension and mobile app.
- **Mobile App**: Access saved URLs and notes, and chat with them using natural language.
- **Cloud Sync**: Data is stored in the cloud, ensuring it's always accessible from any device.

---

## Setup and Installation

### 1. **Browser Extension**

The browser extension is available for Chrome (and compatible browsers like Edge). 

#### **Steps to Set Up:**
1. Clone or download this repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/InstaNote.git
   ```
2. Navigate to the `instanote-extension/` directory.
3. Open Chrome and go to **chrome://extensions/**.
4. Enable **Developer mode** (top right).
5. Click on **Load unpacked** and select the `instanote-extension/` directory.
6. The extension icon should now appear in your browser toolbar.
7. Click on the icon to start saving URLs or interacting with the extension!

---

### 2. **Backend API**

The backend API is built using **Node.js** and **Express**. It handles syncing saved data and managing user authentication.

#### **Steps to Set Up:**
1. Navigate to the `instanote-backend/` directory.
2. Install dependencies:
   ```bash
   cd instanote-backend
   npm install
   ```
3. Create a `.env` file in the `instanote-backend/` directory to store your environment variables (e.g., database credentials, JWT secret).
   Example:
   ```env
   JWT_SECRET=your_jwt_secret
   DATABASE_URL=mongodb://localhost:27017/instanote
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The server will run on **http://localhost:5000** by default.

---

### 3. **Mobile App (React Native)**

InstaNote's mobile app is built with **React Native**. The app allows users to view and chat with saved notes.

#### **Steps to Set Up:**

##### **Prerequisites:**
1. Ensure you have the necessary tools for React Native development installed:
   - Node.js
   - npm or yarn
   - React Native CLI
   - Android Studio / Xcode for Android/iOS emulation

2. Navigate to the `instanote-app/` directory.
3. Install dependencies:
   ```bash
   cd instanote-app
   npm install
   ```

##### **Running the App:**

- **For Android**:
  1. Connect your Android device or start an emulator.
  2. Run the app:
     ```bash
     npx react-native run-android
     ```

- **For iOS**:
  1. Ensure you have Xcode installed.
  2. Run the app:
     ```bash
     npx react-native run-ios
     ```

The app should now launch and connect to the backend API at **http://localhost:5000** (make sure the backend is running first).

---

## Cloud Sync Setup

If you're planning to use cloud sync, you'll need to configure the backend to work with your preferred cloud storage or database solution. This is handled through the **cloudSync.js** file, which can be configured to sync data to services like AWS S3, Google Cloud Storage, or any other cloud service.

### Example Configuration (for MongoDB):
Ensure the `database.js` file contains the correct credentials and connection details for your MongoDB database.

---

## Running the Full App

1. **Start the Backend API**:
   Make sure the backend server is running.
   ```bash
   npm start
   ```

2. **Install the Browser Extension**:
   Load the extension into your browser (Chrome or a compatible browser).

3. **Launch the Mobile App**:
   Run the React Native app on your emulator or mobile device.

Once everything is up and running, your data will be synced across the mobile app and the browser extension. You can interact with saved data using natural language commands.

---

## Contributing

We welcome contributions to the InstaNote project! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Open a pull request with a description of your changes.

---

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
