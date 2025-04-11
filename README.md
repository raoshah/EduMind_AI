# 🧠 EduMind AI  

**EduMind AI** is an interactive educational platform that generates AI-powered quizzes in multiple languages. Users select a subject and language, then answer 10 dynamically generated multiple-choice questions (MCQs) per round. Built with **Django** (backend) and **React** (frontend).  
 

---

## 🚀 Key Features  

- 🌍 **Multilingual Quizzes** – Supports English, Hindi, and more.  
- 🤖 **AI-Powered Questions** – Generates MCQs using OpenAI/custom LLM.  
- 📝 **10 Questions per Round** – 4 options (A–D) per question with instant feedback.  
- 📊 **Performance Analytics** – Score summary after each round.  
- 🔄 **Flexible Retakes** – Replay quizzes or switch topics anytime.  

---

## 🛠️ Tech Stack  

| **Layer**     | **Technology**                |  
|--------------|-------------------------------|  
| Frontend     | React, Tailwind CSS           |  
| Backend      | Django, Django REST Framework |  
| AI Engine    | OpenAI API (or custom LLM)    |  
| Deployment   | Vercel (Frontend), Railway (Backend) |  

---

## 📂 Project Structure  

```plaintext
EduMindAI/
├── backend/                  # Django backend
│   ├── edumind/              # Core settings
│   ├── quiz/                 # Models, views, API
│   └── requirements.txt      # Python dependencies
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # Reusable UI
│   │   ├── pages/            # Quiz screens
│   │   ├── App.js
│   │   └── index.js
│   └── package.json         # JS dependencies
└── README.md


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



---


## 📄 License  
MIT License. Contribute via PRs!  

---
## ✍️ Author  
[@shah_rukh_rao](https://github.com/raoshah) – AI & Full-Stack Developer  


