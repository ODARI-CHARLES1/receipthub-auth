# ReceiptHub Auth

A Node.js authentication service for ReceiptHub, built with Express.js, MSSQL, and JWT for secure user management and email notifications.

## Features

- User authentication with JWT tokens
- MSSQL database integration
- Email notifications using Nodemailer
- Receipt generation with PDFKit
- Modular architecture with separate controllers, services, and utilities

## Prerequisites

- Node.js (v14 or higher)
- MSSQL Server
- Gmail account for email notifications (or configure another SMTP provider)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd receipthub-auth
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   SQL_PORT=1433
   SQL_PWD=your_sql_password
   SQL_USER=your_sql_username
   SQL_DB=ReceiptHub
   SQL_SERVER=your_sql_server
   MAIL_PASS=your_gmail_app_password
   MAIL_USER=your_gmail_email
   PORT=3000
   ```

4. Set up the database:
   Run the SQL script in `src/Models/userModel.sql` to create the database and users table.

## Usage

Start the development server:
```bash
npm run server
```

The server will run on `http://localhost:3000` by default.

## Project Structure

```
receipthub-auth/
├── src/
│   ├── Config/
│   │   ├── db.js          # Database configuration
│   │   └── mailer.js      # Email configuration
│   ├── Controllers/       # Route controllers
│   ├── Middlewares/       # Custom middlewares
│   ├── Models/
│   │   └── userModel.sql  # Database schema
│   ├── Repository/        # Data access layer
│   ├── Routes/            # API routes
│   ├── Services/          # Business logic
│   └── Utils/             # Utility functions
│       ├── ReceiptMail.js
│       ├── ReceiptTemplate.js
│       └── VerificationMail.js
├── .env                   # Environment variables
├── .gitignore
├── package.json
├── Readme.md
└── server.js              # Main server file
```

## Dependencies

- **express**: Web framework for Node.js
- **mssql**: MSSQL database driver
- **jsonwebtoken**: JWT implementation for authentication
- **nodemailer**: Email sending library
- **pdfkit**: PDF generation library
- **cors**: Cross-origin resource sharing
- **dotenv**: Environment variable management
- **nodemon**: Development server auto-restart

## API Endpoints

- `GET /`: Basic health check endpoint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.

## Follow

 
