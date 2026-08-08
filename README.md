# 💼 JobSphere

A modern and responsive **Job Portal Web Application** built with React and Firebase. JobSphere helps users discover jobs, search and filter opportunities, explore companies and categories, save jobs, and apply for jobs through a simple and clean interface.

---

## 🚀 Live Demo

🔗 **Live Website:** Add your deployed Vercel/Netlify link here

---

## 👨‍💻 Created By

**Manyam Prashar**

B.Tech – Information Technology

---

## ✨ Features

### 🔍 Job Search
- Search jobs by:
  - Job Role
  - Company
  - Location
  - Skills
- Search results update dynamically.

### 📍 Job Filtering
- Filter jobs by:
  - Location
  - Company
  - Category

### 💼 Job Details
Users can view:
- Job role
- Company
- Location
- Salary
- Job type
- Required skills
- Job description
- Job ID

### ❤️ Save Jobs
- Save interesting jobs.
- Saved jobs are stored using browser Local Storage.
- Easily access saved jobs later.

### 📝 Apply for Jobs
- Users can apply for jobs.
- Login is required before applying.
- Application information is stored locally.
- Prevents duplicate applications for the same job.

### 📋 Applied Jobs
Users can view jobs they have already applied for.

### 🏢 Companies
Explore jobs from companies such as:
- Google
- Microsoft
- Amazon
- Adobe
- TCS
- Infosys
- Accenture
- IBM

### 📂 Job Categories
Browse jobs by categories such as:
- Software
- AI / ML
- Cloud
- Design
- Marketing
- Finance
- Healthcare
- Education

### 🔐 Authentication
Firebase Authentication is used for user login and authentication.

### 📱 Responsive UI
The application is designed to work across:
- Desktop
- Tablet
- Mobile

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- JSX
- Tailwind CSS

### Routing
- React Router DOM

### Authentication
- Firebase Authentication

### Data Storage
- Local Storage

### Build Tool
- Vite

---

## 📁 Project Structure

```text
JobSphere/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Stats.jsx
│   │   ├── FeaturedJobs.jsx
│   │   ├── TopCompanies.jsx
│   │   ├── Categories.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Newsletter.jsx
│   │   ├── TrendingJobs.jsx
│   │   └── JobCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Jobs.jsx
│   │   ├── JobDetails.jsx
│   │   ├── Apply.jsx
│   │   ├── Applied.jsx
│   │   ├── SavedJobs.jsx
│   │   ├── Companies.jsx
│   │   ├── Categories.jsx
│   │   └── About.jsx
│   │
│   ├── data/
│   │   └── jobs.js
│   │
│   ├── firebase.js
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
⚙️ Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Move into the project:

cd JobSphere

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local URL shown by Vite in your browser.

🔥 Firebase Configuration

Create a Firebase project and enable:

Authentication
   ↓
Email/Password

Then configure your Firebase credentials inside:

src/firebase.js

Example:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
🔐 Main User Flow
Home
  ↓
Search / Browse Jobs
  ↓
Job Details
  ↓
Login
  ↓
Apply for Job
  ↓
Application Submitted
  ↓
Applied Jobs

Users can also:

Job Details
  ↓
Save Job
  ↓
Saved Jobs
📌 Important Features Demonstrated

This project demonstrates practical React concepts including:

Functional Components
React Hooks
useState
useEffect
useMemo
React Router
URL Search Parameters
Dynamic Routes
Firebase Authentication
Local Storage
Conditional Rendering
Array Filtering
Responsive Design
Tailwind CSS
Component-Based Architecture
🧪 Build

Create a production build:

npm run build

Preview the production build:

npm run preview
🌐 Deployment

The project can be deployed using platforms such as:

Vercel
Netlify

After deployment, add the live website link to the Live Demo section above.
📄 License

This project is created for educational and portfolio purposes.

👨‍💻 Author
Manyam Prashar

B.Tech – Information Technology

Built with ❤️ using React, Firebase and Tailwind CSS.

⭐ If you like this project, consider giving the repository a star!