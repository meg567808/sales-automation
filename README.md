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




```mermaid
flowchart TD

A[React Frontend] --> B[Express Backend API]
B --> C[CSV Parser Service]
C --> D[Gemini AI API]
D --> E[Generate Sales Insights]
E --> F[Email Service - Nodemailer]
F --> G[Send Summary Email]