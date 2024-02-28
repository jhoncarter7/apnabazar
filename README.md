# apnabazar
![home page](https://res.cloudinary.com/dpsi55s3c/image/upload/v1709093573/dslq0sb3gl0jxpxqjhbt.png)
![cart page](https://res.cloudinary.com/dpsi55s3c/image/upload/v1709093572/fvgsx6mdemgfd9ajpufv.png)

## Apnabazar

* **CRUD Operations:** Users can easily create, read, update, and delete product listings.
* **Secure Authentication:** User registration and login protect user data.
* **Payment Integration:** A payment gateway allows for secure transactions.
* **Product Listing:** Users have the ability to showcase their products effectively."


**Technologies**

* **Backend:**
    * Node.js
    * Express
    * MongoDB (Mongoose ODM)
    * Stripe (for payments)
    * JSON Web Tokens (for authentication)
* **Frontend**
    * React
    * Redux / Redux Toolkit (for state management)
    * React Router DOM (for navigation)
    * Vite (build tool)
    * Tailwind CSS (utility-first styling)
    * Material UI (UI Components)
    * Stripe React components
    * Firebase (additional functionality - specify what it's used for)

**Setup**

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/apnabazar.git
   ```

2. **Install Dependencies**
   ```bash
   cd apnabazar
   npm install 
   cd client
   npm install 
   ```

3.  **Environment Variables**
    * Create a `.env` file in the project root.
    * Add required environment variables (MongoDB connection string, Stripe secret key, etc.)
    * **Important:** Never commit your `.env` file to GitHub!

**Development**

1. **Start Backend Development Server**
   ```bash
    npm run dev
   ```

2. **Start Frontend Development Server (in a separate terminal)**
   ```bash
   cd client
   npm run dev
   ```

**Build for Production**

   ```bash
   npm run build 
   ```

**Deployment**

* Follow instructions specific to your deployment platform (e.g., Render, Heroku, AWS, Netlify, or your own server).
* Ensure environment variables are configured on the deployment platform.

