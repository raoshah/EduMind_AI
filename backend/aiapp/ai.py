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
Generate 10 multiple-choice questions based on the subject: {user_prompt}, in the English language. If the same topic is asked again, return unique questions every time. Each question must include:

- A question text
- Four options labeled A, B, C, and D
- One correct answer key (A, B, C, or D)
- An explanation for the correct answer
- The correct subject name as "subject" based on the question content

Return the result in the exact following JSON format and nothing else — no tags, headers, comments, or extra lines. Do not use the word "JSON", do not mention anything about the user, and do not add any extra text. Return only:

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
    "explanation": "Paris is the capital city of France.",
    "subject": "France"
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

