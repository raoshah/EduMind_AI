from dotenv import load_dotenv
import os, requests, json

load_dotenv()

def ai(user_prompt):
    print(user_prompt)
    api_key = os.environ.get('API_KEY')
    if not api_key:
        print("❌ API_KEY not found in environment variables.")
        return

    prompt = f"""
Generate 10 multiple-choice questions for the subject of {user_prompt}  in the English language for user id=1 if same user ask about same topic again return unique questions every time . Each question must include:

- A question text
- Four options labeled A, B, C, and D
- One correct answer key (A, B, C, or D)
- A explanation for the correct answer

Return the result in the following JSON format and nothing else — no tags, headers, or additional text even dont use json word dont mention anything about user and dont use any additional line just return only following JSON format because i use this in my code if you return anything alse i will get error:

[
  {{
    "question": "What is the capital of France?",
    "options": {{
      "A": "Berlin",
      "B": "London",
      "C": "Paris",
      "D": "Madrid"
    }},
    "answer": "C",
    "explanation": "Paris is the capital city of France."
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

