from dotenv import load_dotenv
import os, requests

load_dotenv()

def ai(user_prompt):
    api_key = os.environ.get('API_KEY')
    if not api_key:
        print("❌ API_KEY not found in environment variables.")
        return

    prompt = f"Based on this user prompt, give me answer:\n\n{user_prompt}"

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
    return result["choices"][0]["message"]["content"]

