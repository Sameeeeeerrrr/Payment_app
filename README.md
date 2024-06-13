Payment App
Welcome to the Payment App! This application provides a secure and efficient platform for managing financial transactions. It offers comprehensive features including user authentication, account management, and transaction processing, ensuring a smooth and reliable experience for all users.

Features
User Authentication
The app includes a robust authentication system where users can sign up and log in using their credentials. This is secured using JSON Web Tokens (JWT) to ensure that only authorized users can access the application.

Secure Account Management
Users can easily view and manage their account balance. Every page in the app is protected and requires authentication to access, ensuring that user data is kept safe and private.

Transaction Integrity
Transactions within the app are managed using MongoDB sessions and Mongoose transactions. This ensures that all transactions are processed reliably and consistently, preventing issues like double-spending or transaction errors.

Secure Data Handling
All sensitive data, including user credentials and transaction details, are securely encrypted and stored in a MongoDB database. This ensures that user information is protected against unauthorized access and breaches.

Token-based Authentication
Each request to the app's endpoints requires a valid JWT token, providing a secure and efficient way to manage user sessions and access control. This means that every interaction with the app is authenticated, adding an extra layer of security.

Scalable Architecture
The application is designed to handle a large number of users and transactions efficiently. It leverages MongoDB for data storage, ensuring that it can scale easily as the user base grows.

Technology Stack
Node.js: A JavaScript runtime used for building the back-end of the app.
Express.js: A web application framework for Node.js used to build the API endpoints.
MongoDB: A NoSQL database used to store user credentials, account balances, and transaction data.
Mongoose: An ODM (Object Data Modeling) library for MongoDB, used to define the database schema and manage data interactions.
JWT: JSON Web Tokens are used for securely transmitting information between parties as a JSON object.
