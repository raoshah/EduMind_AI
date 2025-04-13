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
    Generate 10 multiple-choice questions for the subject of {user_prompt} in the English language. Each question must have:

    - 1 question text
    - 4 options labeled A, B, C, D
    - 1 correct answer key (A, B, C, or D)

    Return the result in this JSON format:

    [
      {{
        "question": "What is the capital of France?",
        "options": {{
          "A": "Berlin",
          "B": "London",
          "C": "Paris",
          "D": "Madrid"
        }},
        "answer": "C"
      }},
      ...
    ]

    and return only 10 questions in JSON format and nothing else not even any tag word like json
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

