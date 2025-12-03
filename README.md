# Airbnb-Project

**My First Ever MERN Stack project**

**Live demo:** https://airbnb-project-6vs9.onrender.com/listings

---

## Table of Contents
- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Repository Composition](#repository-composition)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Installation & Running Locally](#installation--running-locally)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Project Structure (approx.)](#project-structure-approx)
- [Contributing](#contributing)
- [License](#license)

---

## About
This repository contains an Airbnb-like web application built as a **MERN-style project but using server-rendered EJS views (no separate React frontend). The app demonstrates authentication, listings CRUD, image uploads, and map integration.

---

## Tech Stack
- **Node.js (engines.node: 20.11.0)**
- **Express**
- **MongoDB (Mongoose)**
- **EJS + ejs-mate (server-side views)**
- **Passport (passport-local & passport-local-mongoose) for authentication**
- **Cloudinary for image storage**
- **Mapbox for maps**
- **Multer + multer-storage-cloudinary for uploads**
- **Validation with Joi**
- **Sessions with express-session and connect-mongo**

---

## Features
- **User authentication (sign up / login / logout)**
- **Create, read, update, delete listings**
- **Image uploads to Cloudinary**
- **Mapbox integration for location display**
- **Flash messages and form validation**
- **Session persistence using MongoDB**

---

## Repository Composition (by language)
- **JavaScript: ~49.1%**
- **EJS: ~28.6%**
- **CSS: ~22.3%**

---

## Prerequisites
- Node.js v20.11.0 (or compatible)
- npm (or yarn)
- MongoDB database (Atlas or local)
- Cloudinary account (for image storage)
- Mapbox account (for map token)

---

## Environment Variables
Create a `.env` file in the project root with the following variables (example):

```env
PORT=3000
NODE_ENV=development

# MongoDB (example)
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/airbnb-project?retryWrites=true&w=majority

# Session / Auth
SESSION_SECRET=your_session_secret_here

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Mapbox
MAPBOX_TOKEN=your_mapbox_token
```

Make sure to replace placeholder values with real credentials.

---

## Installation & Running Locally

1. Clone the repository:
```bash
git clone https://github.com/Aditya-Sureka/Airbnb-Project.git
cd Airbnb-Project
```

2. Install dependencies:
```bash
npm install
```

3. Setup your `.env` file as shown above.

4. Add useful npm scripts (if not present) to package.json for local development:
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```
(You can add these lines under the existing `scripts` object locally.)

5. Run the app:
```bash
npm run dev
# or
npm start
```

6. Open your browser at:
```
http://localhost:3000/listings
```

Notes:
- The repository's package.json declares `main: "index.js"`. If your entry file differs, adjust the start scripts accordingly.
- The package.json lists Node engine 20.11.0 — use a compatible Node version.

---

## Screenshots
Place your screenshots in a `screenshots/` directory at the repository root and reference them like this in the README:

![Home Page](https://github.com/Aditya-Sureka/Airbnb-Project/blob/main/Screenshot%202024-08-10%20120924.png)
![Create Listing](https://github.com/Aditya-Sureka/Airbnb-Project/blob/main/Screenshot%202024-08-10%20121141.png)
![Listing Details](https://github.com/Aditya-Sureka/Airbnb-Project/blob/main/Screenshot%202024-08-10%20121403.png)

Suggested captions/alt-text for the images you supplied:
- home.png — "Listings grid with pool villas and search header."
- create-listing.png — "Create a New Listing form (title, description, image upload, price, location)."
- listing-details.png — "Listing details grid with price and GST toggle view."

Replace the filenames with the actual screenshot filenames you add. These images will appear on the README when pushed to GitHub.

---

## Deployment
This project can be deployed to platforms like Render, Heroku, Railway, or any Node.js hosting provider.

Example notes:
- Ensure environment variables are set on the host (Mongo URI, Cloudinary creds, Mapbox token, session secret).
- If using Render (as the current live demo suggests), set `start` script and the Node engine in package.json (already present).
- Use a persistent MongoDB instance (Atlas or production DB) and configure any required CORS or production-specific settings.

Live site (example): https://airbnb-project-6vs9.onrender.com/listings

---

## Project Structure (approximate)
A typical structure for this project may look like:

```
Airbnb-Project/
├─ public/
│  ├─ stylesheets/
│  └─ JavaScripts/
├─ routes/
├─ views/
│  ├─ listings/
│  └─ users/
├─ models/
├─ middlewares/
├─ screenshots/
├─ index.js
├─ package.json
└─ README.md
```

(Adjust if actual structure differs; this is a commonly used layout for Express + EJS projects.)

---

## Contributing
- Fork the repo, create a feature branch, and open a pull request.
- Add clear commit messages and update the README with any new environment variables or setup steps.
- Provide screenshots for UI changes.

---

## License
This project is available under the **MIT License**. Add a LICENSE file with MIT text if you want to include it in the repo.

---

## Author
Aditya-Sureka — GitHub: https://github.com/Aditya-Sureka

---

If you'd like, I can also:
- create a LICENSE file (MIT) you can copy,
- prepare a screenshots/ folder with placeholder images and filenames matching the README,
- or provide a one-line patch you can apply if you prefer not to replace the README manually.
