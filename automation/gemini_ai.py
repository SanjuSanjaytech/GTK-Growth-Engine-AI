import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY", "ADD_KEY_LATER"))

def analyze_sentiment(text):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(
        f"Classify sentiment (Positive/Neutral/Negative): {text}"
    )
    return response.text    

if __name__ == "__main__":
    print(analyze_sentiment("I want more customers daily"))
