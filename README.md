# Login and Dashboard System

This project provides a simple login page with MongoDB backend and a secure dashboard with a sign-out option.

---
## **Features**
- User Authentication using MongoDB.
- Session storage to protect the dashboard.
- Sign-out functionality to clear sessions.

---
## **Technologies Used**
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB

---
## **Setup Instructions**

### **1. Prerequisites**
- Node.js installed (https://nodejs.org/)
- MongoDB installed and running locally (https://www.mongodb.com/)

### **2. Clone the Repository**
```bash
git clone <repository-url>
cd <repository-folder>
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Start MongoDB Server**
```bash
mongod --dbpath /path/to/data
```

### **5. Seed Database with User Credentials (Optional)**
Open MongoDB shell:
```bash
mongosh
use loginDB
```
Insert a test user:
```javascript
db.users.insertOne({ email: "test@example.com", password: "123456" })
```

### **6. Run the Server**
```bash
node server.js
```

### **7. Access the Application**
Open your browser and go to:
```
http://localhost:5000/
```

---
## **Usage Instructions**

### **Login Page**
1. Enter email and password.
2. Click "Login".
3. If credentials are valid, you will be redirected to the dashboard.

### **Dashboard**
- Displays a welcome message.
- Includes a **Sign Out** button to log out and redirect to the login page.

---
## **Security Notes**
- Session storage is used to track login status.
- Ensure MongoDB is secured in production environments.

---
## **Troubleshooting**
1. **MongoDB not recognized?**
   - Ensure MongoDB is installed and added to system PATH.
2. **Server not starting?**
   - Verify MongoDB is running.
   - Check for missing Node.js dependencies with `npm install`.
3. **Login not working?**
   - Check database for valid user credentials.

---
## **Contact**
For any issues, reach out to [mishrahars60@gmail.com].


