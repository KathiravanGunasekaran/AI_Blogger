import os
from dotenv import load_dotenv
import google.generativeai as genai
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)


class question(BaseModel):
    topic: str


@app.post("/generate-blog")
async def generate_blog(topic: question):
    prompt = f"Write a well-structured blog post about {topic}. Include an introduction, key points, and a conclusion."

    model = genai.GenerativeModel("gemini-2.0-flash")
    response = model.generate_content(prompt)

    return {"topic": topic.topic, "blog": response.text}
