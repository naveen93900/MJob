# Job App -  Job Marketplace

Welcome to **Job App**, a modern job marketplace platform where users can find jobs, post job opportunities, and earn money by sharing listings. This app offers an elegant and intuitive experience tailored for job seekers, recruiters, and freelancers.

---

## Features

- Browse latest high-paying jobs with detailed descriptions.
- Filter jobs by category, location, and skills.
- Post job opportunities and earn based on views.
- User registration and login with secure authentication.
- Responsive UI with luxurious design and smooth animations.
- Easy-to-use interface for both job seekers and employers.

---

## Technologies Used

- **Frontend:** React.js, CSS Modules, React Router
- **Backend:** REST API server (e.g., Node.js + JSON server or custom API)
- **Styling:** Google Fonts (Inter, Playfair Display), CSS animations
- **Data Storage:** JSON files (`api.json`), local API endpoints (e.g., `http://localhost:5000`)

---

## Getting Started

### Prerequisites

- Node.js installed (v14+ recommended)
- npm or yarn package manager
- JSON Server or your preferred backend serving `api.json`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/naveen93900/MJob.git
   cd MJob
Install dependencies:


npm install

npm install react-router-dom

# 


Start the backend JSON server:

"npx json-server --watch api.json --port 5000"


Start the React development server:

"npm start"


Project Structure


/my-app
├── /public
├── /src
│   ├── /components
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Signup.jsx
│   │   ├── UserLogin.jsx
│   │   └── About.jsx
│   ├── /styles
│   │   ├── Home.css
│   │   ├── Signup.css
│   │   ├── UserLogin.css
│   │   └── About.css
│   ├── App.js
│   └── index.js
├── api.json
├── package.json
└── README.md
API Endpoints
GET /jobs - Fetch list of jobs (supports query params like _limit)

POST /users - Create new user (signup)

GET /users - Get users list (used for login validation)

Usage
Sign Up: Create a new user account via the signup form.

Login: Authenticate with your registered email and password.

Explore Jobs: Browse the latest luxury jobs on the home page.

Post Jobs: Share job opportunities to start earning based on views.

About: Learn more about the platform and its unique features.

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the app.

License
This project is licensed under the MIT License.

Contact
For any questions or support, please contact:

Your Name - venkatmallapuram123@gmail.com

GitHub: naveen93900
