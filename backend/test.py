api_key="AIzaSyDZ9dWVbEIFNAFJRxV5bVeLxHg6lBtQ14I"

from google import genai
from pydantic import BaseModel

def build_prompt(topic: str, language: str, level: str) -> str:
    return f"""
Generate 10 multiple choice questions for students in JSON format.

Topic: {topic}
Language: {language}
Difficulty Level: {level.capitalize()}

Each question must include:
- 'question': the question text
- 'options': 4 answer options as A, B, C, D
- 'answer': the correct option (A-D)
- 'explanation': a short explanation of the correct answer

Ensure the questions match the {level.lower()} level of understanding and are appropriate for high school students.
All content must be in {language}.
"""

topic = "Photosynthesis"
language = "Hindi"
level = "advanced" 
prompt = build_prompt(topic, language, level)

class Recipe(BaseModel):
  question: str
  options: list[str, str, str, str]
  answer: str  
  explanation: str



client = genai.Client(api_key=api_key)
response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents=prompt,
    config={
        'response_mime_type': 'application/json',
        'response_schema': list[Recipe],
    },
)
# Use the response as a JSON string.
print(response.text)

# Use instantiated objects.
my_recipes: list[Recipe] = response.parsed

for recipe in my_recipes:
   for recipe in recipe.options:
      print(recipe)