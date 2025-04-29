from dotenv import load_dotenv
import os, requests, json

load_dotenv()

def ai(user_prompt, language):
    print(user_prompt)
    api_key = os.environ.get('API_KEY')

    prompt = f"""
Generate 10 multiple-choice questions strictly in the {language} language based on the topic: "{user_prompt}". 
Ensure the style is suitable for competitive exams (e.g., UPSC, SSC, NEET, Banking).

If the same topic is asked again, always return new, unique questions.

Each question must include:
- A question text (in {language})
- Four options labeled A, B, C, and D (in {language})
- One correct answer key (A, B, C, or D)
- A detailed explanation for the correct answer (in {language})
- A subject field named "subject" — the subject name must also be in {language}

All parts of the output — including subject — must be entirely in {language}.

Return the output in this **exact JSON format only** — no comments, no markdown, no extra text:

[
  {{
    "question": "भारतीय संविधान में मूल कर्तव्यों का उल्लेख कहाँ किया गया है?",
    "options": {{
      "A": "अनुच्छेद 14",
      "B": "अनुच्छेद 51A",
      "C": "अनुच्छेद 32",
      "D": "अनुच्छेद 21"
    }},
    "answer": "B",
    "explanation": "मूल कर्तव्यों का उल्लेख संविधान के अनुच्छेद 51A में किया गया है जो 42वें संविधान संशोधन द्वारा जोड़े गए थे।",
    "subject": "राजव्यवस्था"
  }},
  ...
]
"""


    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        json={
            "model": "meta-llama/llama-4-maverick:free",
            "messages": [
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        }
    )

   
    result = response.json()
    print(result)
    data = result["choices"][0]["message"]["content"]
    print(data)
    result_data = json.loads(data)
    print(result_data)
    return result_data

