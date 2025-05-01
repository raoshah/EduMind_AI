import { useState, useEffect } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from '../redux/quizSlice';
import Quiz from '../components/Quiz';
import './MainScreen.css'
import animationData from './Animation -Lottie.json';
import { API_URL2 } from '../constants';

const MainScreen = () => {
    const [prompt, setPrompt] = useState("");
    const [language, setLanguage] = useState("English");
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);

    const languages = [
        "English",
        "Hindi",
    ];

    const { loading, data, error } = useSelector((state) => state.quizSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data && data.length > 0) {
            const postData = async () => {
                try {
                    const response = await axios.post(`${API_URL2}/aiapi/save-questions/`, data,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        }
                    );

                    console.log(response.data);

                } catch (error) {
                    console.error("Error submitting questions:", error);
                }
            };

            postData();
        }
    }, [data]);


    const handlePrompt = () => {
        dispatch(getQuestions({ prompt, language }));
        setIndex(0);
        setScore(0);
    };

    const nextQue = () => {
        if (data.length - 1 > index) {
            setIndex((prev) => prev + 1)
        }
    }

    const handleAnswer = (correct) => {
        if (correct) setScore(prev => prev + 1);
    };

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="input-wrapper">
                <input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter any topic"
                />
                <div>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="" disabled>Select a language</option>
                        {languages.map((lang) => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </select>
                    <button onClick={handlePrompt}>Get Questions</button>
                </div>
            </div>


            {data.length > 0 && (<h2 className="score" >Your Score: {score}/{data.length}</h2>)}

            {loading && <div className="loading-container">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    className="loading-animation"
                />
            </div>}

            {error && <p className="error">{error}</p>}

            {data.length > 0? <Quiz
                    key={index}
                    questionData={data[index]}
                    next={nextQue}
                    index={index}
                    onAnswer={handleAnswer}
                    quizLength={data.length}
                /> :
                <div className="hero-section">
                <h1>Master Any Topic with AI-Powered MCQs</h1>
                <p>Just type a topic and instantly get 10 smart questions to test your knowledge!</p>
              </div>
                        
            }
        </motion.div>

    )
}


export default MainScreen;