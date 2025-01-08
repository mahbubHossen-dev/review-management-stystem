# Service Review Application System

Welcome to the Service Review Application System, a full-stack platform designed to allow users to review, manage, and interact with various services. This project demonstrates the integration of modern web development technologies and user-focused functionality to create an engaging experience.


## Key Features

- Dynamic Home Page: Featuring a carousel, services preview, and partner highlights.

- Service Management: Logged-in users can add, update, or delete their services.

- Review System: Post, update, and delete reviews with real-time feedback.

- Search and Filter: Find services easily using keywords or categories.

- Authentication: Secure login and registration using Firebase.

- Responsive Design: Fully optimized for desktop, tablet, and mobile devices.

- JWT Authentication: Ensures secure access to protected routes and APIs.


## 🛠 Skills
Technologies Used

Frontend:

React: For building the user interface.

Tailwind CSS: For styling the application.

daisyUI: For ready-made UI components.

Framer Motion: For animations.

Backend:
Express, mongoDB


## Key Features

### Authentication & Authorization

- JWT Authentication: Secure user authentication with JSON Web Tokens.

- Cookie-Based Authentication: Uses cookies for managing session tokens with httpOnly and secure settings.

- Protected Routes: Sensitive operations like posting and editing services/reviews are protected with token-based middleware.

- Service Management

- Add Services: Allows authorized users to add new services.

- View Services:

- Retrieve all services or filter by category.

- Fetch a limited number of services (e.g., 6 for homepage).

- Fetch details of a specific service by its ID.

- Update Services: Edit service details using a PUT request.

- Delete Services: Remove specific services securely.

- Review Management

- Add Reviews: Users can submit reviews for services.

### Get Reviews:

- Retrieve all reviews for a specific service by its ID.

- Fetch all reviews associated with a user account (email-based).

- Edit Reviews: Update review content, including rating and description.

- Delete Reviews: Remove specific reviews securely.

### Security Features

- Middleware Validation: Protect routes with verifyToken middleware to ensure only authorized users can access sensitive endpoints.

- Environment Variables: Store sensitive credentials like database user and password in .env.

- CORS Configuration: Restrict origins to trusted domains with cross-origin credentials enabled.


## 🛠 Skills
Technologies Used

Frontend:

React: For building the user interface.

Tailwind CSS: For styling the application.

daisyUI: For ready-made UI components.

Framer Motion: For animations.



### Dependencies
- @smastrom/react-rating: ^1.5.0",
- axios: ^1.7.9",
- date-fns": ^4.1.0",
- firebase: ^11.1.0",
- jsonwebtoken: ^9.0.2",
- localforage: ^1.10.0",
- match-sorter: ^8.0.0",
- motion: ^11.15.0",
- react": "^18.3.1",
- react-countup: ^6.5.3",
- react-datepicker: ^7.5.0",
- react-dom: ^18.3.1",
- react-hook-inview: ^4.5.1",
- react-icons: ^5.4.0",
- react-router-dom: ^7.1.0",
- react-toastify: ^11.0.2",
- sort-by: ^1.2.0",
- sweetalert2: ^11.15.3",
- swiper: ^11.1.15"
## 1. Installation
Run npm install to install project dependecies.

### Frontend
After creating a Firebase project, you can find your Firebase configuration details in the Firebase Console. Once you have those, add them to the .env.local file.

Examples:
- REACT_APP_FIREBASE_API_KEY=your-api-key
- REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
- REACT_APP_FIREBASE_PROJECT_ID=your-project-id
- REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
- REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-s- ender-id
- REACT_APP_FIREBASE_APP_ID=your-app-id
- REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id


### Backend
## 2. Environment setup
Create a .env file and put your environment variable there. Save the following variable:

- NODE_ENV=development 
- PORT=Your port 
- DATABASE_URL=Your MongoDB Atlas URL 
- BCRYPT_SALT_ROUNDS=Your salt round 
- JWT_ACCESS_SECRET=Your access token 
- ACCESS_TOKEN_EXPIRATION=Your expiration time

# Usage
npm run dev

## Links:
Live: https://reviewsystem-dfd5c.web.app/

Server-site: https://github.com/programming-hero-web-course2/b10a11-server-side-MahbubHosssen

