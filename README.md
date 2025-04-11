# 🧠 EduMind AI

**EduMind AI** is a full-stack educational web app powered by artificial intelligence. It allows users to select a subject and language, then presents 10 AI-generated multiple-choice questions (MCQs) per round. Each question has 4 options (A–D), and the user must select the correct one. The platform is built using **Django** for the backend and **React** for the frontend.

---

## 🚀 Features

- 🌍 Choose any **subject** and **language**
- 🤖 AI-generated **multiple-choice questions**
- 🔢 10 questions per round with 4 options: **A, B, C, D**
- ✅ Instant answer feedback
- 📊 Score summary after each round
- 🔁 Replay or change subject/language at any time
- 🌐 Multilingual support (e.g. English, Hindi, etc.)

---

## 🛠️ Tech Stack

| Layer     | Technology       |
|-----------|------------------|
| Frontend  | React, Tailwind CSS |
| Backend   | Django, Django REST Framework |
| AI Engine | OpenAI API (or custom LLM) |
| Hosting   | Vercel (Frontend), Railway/Render (Backend) |

---

## 📁 Project Structure

EduMindAI/ ├── backend/ # Django backend │ ├── edumind/ # Project settings │ ├── quiz/ # App with models, views, API │ └── requirements.txt # Python dependencies ├── frontend/ # React frontend │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── App.js │ │ └── index.js │ └── package.json # JS dependencies └── README.md


---

## 🧪 How It Works

1. **User selects** a subject (e.g., Math, Science) and language (e.g., English, Hindi).
2. The backend uses AI (via OpenAI API or custom LLM) to generate 10 MCQs based on input.
3. The frontend displays questions one by one with 4 options (A–D).
4. After every 10 questions, a score summary is shown.
5. User can retry the quiz or select a new subject/language.

---

## 🔧 Getting Started

### 🔙 Backend (Django)

```bash
cd backend
python -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

OPENAI_API_KEY=your_openai_key
DJANGO_SECRET_KEY=your_secret

## 📄 License
This project is licensed under the MIT License.
Feel free to fork, improve, and contribute!

## ✍️ Author
Created by @raoshah – AI + Web Developer
