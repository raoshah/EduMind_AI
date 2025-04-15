import { useState } from 'react';
import Lottie from 'lottie-react';
import { motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from '../redux/quizSlice';
import Quiz from '../components/Quiz';
import './MainScreen.css'
import animationData from './Animation -Lottie.json';

const MainScreen = () => {
    const [prompt, setPrompt] = useState("");
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);

    const { loading, data, error } = useSelector((state) => state.quizSlice);
    const dispatch = useDispatch();

    const handlePrompt = () => {
        dispatch(getQuestions({ prompt }));
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
                    className="styled-input"
                />
                <button onClick={handlePrompt} className="input-button">Get Questions</button>
            </div>


            {data.length > 0 && (<h2 className="score" >Your Score: {score}/{data.length}</h2>)}

            {loading && <div className="loading-container">
                <p className="loading-text">Loading...</p>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    className="loading-animation"
                />
            </div>}

            {error && <p className="error">{error}</p>}

            {data.length > 0 && (
                <Quiz
                    questionData={data[index]}
                    next={nextQue}
                    index={index}
                    onAnswer={handleAnswer}
                />
            )}
        </motion.div>

    )
}


export default MainScreen;