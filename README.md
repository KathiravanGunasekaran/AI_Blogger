📌 AI-Powered Blog Post Generator

🚀 A simple AI-powered blog generator built with FastAPI (backend) and React (frontend) using Google Gemini API.

🌟 Features

✅ Enter a topic and generate a structured blog post.
✅ Uses Google Gemini API for AI-generated content.
✅ React-powered UI with real-time blog generation.
✅ FastAPI backend to process requests efficiently.

🛠️ Tech Stack

Frontend: React, Axios, CSS

Backend: FastAPI, Google Gemini API

Deployment: AWS / GCP (optional)

🚀 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/yourusername/blog-generator.git
cd blog-generator

2️⃣ Backend Setup (FastAPI)
# Install Dependencies
pip install fastapi uvicorn google-generativeai

# Set Up API Key
Get a Gemini API key from Google AI Studio and store it in .env file:
GEMINI_API_KEY="your-api-key-here"

# Run the FastAPI Server
uvicorn main:app --reload

Backend will be running at [http://127.0.0.1](http://localhost):8000

3️⃣ Frontend Setup (React)

# Install Dependencies
cd blog-generator
npm install

# Run React App
npm run dev

The React app will start at [http://localhost](http://localhost):3000

📌 API Endpoint

POST /generate-blog

# Request:
{ "topic": "The Future of AI" }

# Response:
{ "topic": "The Future of AI", "blog": "Generated content here..." }

