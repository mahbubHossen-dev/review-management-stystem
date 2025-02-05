# Service Review Application System

## 📝 Project Overview
The **Service Review Application System** is a full-stack platform designed to allow users to review, manage, and interact with various services. This project integrates modern web development technologies with user-friendly functionality to enhance the experience of service providers and consumers.

## 🌍 Live Project
🔗 [Live Demo](https://reviewsystem-dfd5c.web.app/)

🔗 [Server-Side Repository](https://github.com/programming-hero-web-course2/b10a11-server-side-MahbubHosssen)

## 🛠 Technologies Used
### Frontend:
- **React**: For building the user interface.
- **Tailwind CSS**: For efficient styling.
- **daisyUI**: Ready-made UI components.
- **Framer Motion**: For animations.

### Backend:
- **Express.js**: Server-side framework.
- **MongoDB**: NoSQL database.
- **Firebase**: For authentication.
- **JWT**: Token-based authentication.

## 📸 Screenshot
*(Add a clean screenshot of your project here to showcase the UI.)*

---

## ✨ Core Features
- **Dynamic Home Page**: Carousel, services preview, and partner highlights.
- **Service Management**: Logged-in users can add, update, or delete services.
- **Review System**: Users can post, update, and delete reviews with real-time feedback.
- **Search and Filter**: Find services easily using keywords or categories.
- **Authentication**: Secure login and registration with Firebase.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **JWT Authentication**: Ensures secure access to protected routes and APIs.

## 📦 Dependencies Used
```
@smastrom/react-rating: ^1.5.0
axios: ^1.7.9
date-fns: ^4.1.0
firebase: ^11.1.0
jsonwebtoken: ^9.0.2
localforage: ^1.10.0
match-sorter: ^8.0.0
motion: ^11.15.0
react: ^18.3.1
react-countup: ^6.5.3
react-datepicker: ^7.5.0
react-dom: ^18.3.1
react-hook-inview: ^4.5.1
react-icons: ^5.4.0
react-router-dom: ^7.1.0
react-toastify: ^11.0.2
sort-by: ^1.2.0
sweetalert2: ^11.15.3
swiper: ^11.1.15
```

---

## ⚡ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/service-review-app.git
cd service-review-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Frontend Environment Setup
Create a `.env.local` file and add your Firebase configuration:
```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

### 4️⃣ Backend Environment Setup
Create a `.env` file in the backend folder and add:
```env
NODE_ENV=development
PORT=YourPort
DATABASE_URL=YourMongoDBAtlasURL
BCRYPT_SALT_ROUNDS=YourSaltRound
JWT_ACCESS_SECRET=YourAccessTokenSecret
ACCESS_TOKEN_EXPIRATION=YourExpirationTime
```

### 5️⃣ Run the Project
```bash
npm run dev
```

Now the project will be running on **localhost:3000** (Frontend) and **localhost:YourPort** (Backend).

---

## 📌 Relevant Links
- **Live Project**: [https://reviewsystem-dfd5c.web.app/](https://reviewsystem-dfd5c.web.app/)
- **Server Repository**: [https://github.com/programming-hero-web-course2/b10a11-server-side-MahbubHosssen](https://github.com/programming-hero-web-course2/b10a11-server-side-MahbubHosssen)
- **Frontend Repository**: *(Add your frontend repo link here)*

---

🔹 This README follows a structured format with all required details. Feel free to customize it further!

