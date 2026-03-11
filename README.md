# Sales Insight Automator

An AI-powered system that analyzes CSV sales data and generates executive insights using Gemini AI. The generated insights are automatically emailed to the specified recipient.

## Features

- Upload CSV sales data
- AI-generated sales insights
- Automatic email delivery
- React frontend
- Dockerized backend
- Swagger API documentation

## Tech Stack

Frontend: React  
Backend: Node.js, Express  
AI: Gemini API  
Email: Nodemailer  
DevOps: Docker, GitHub Actions

## Run Locally

Backend:

npm install
npm run dev

Frontend:

npm install
npm start

## Run with Docker

docker compose up --build

## API Endpoint

POST /api/upload

Form Data:

file: CSV file  
email: recipient email

## Swagger Docs

http://localhost:5000/api-docs


## Security Measures

The API includes several protections:

- File upload limited to 5MB to prevent abuse
- Only CSV files accepted via Multer validation
- Sensitive credentials stored in environment variables
- `.env` excluded via `.gitignore`
- API containerized to isolate runtime environment


## API Documentation

Swagger documentation is available at:
https://sales-automation.onrender.com/api-docs

Note: On the free Render tier the server may take ~30–60 seconds to wake up after inactivity.




```mermaid
flowchart TD

A[React Frontend] --> B[Express Backend API]
B --> C[CSV Parser Service]
C --> D[Gemini AI API]
D --> E[Generate Sales Insights]
E --> F[Email Service - Nodemailer]
F --> G[Send Summary Email]