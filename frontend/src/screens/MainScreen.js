import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from '../redux/quizSlice';
import Quiz from '../components/Quiz';
import './MainScreen.css'

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
        <>
            <div className="input-wrapper">
                <input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter topic"
                    className="styled-input"
                />
                <button onClick={handlePrompt} className="input-button">Get Questions</button>
            </div>

            {data.length > 0 && (<h2 className="score" >Your Score: {score}/{data.length}</h2>)}

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            {data.length > 0 && (
                <Quiz
                    questionData={data[index]}
                    next={nextQue}
                    index={index}
                    onAnswer={handleAnswer}
                />
            )}
        </>
    )
}


export default MainScreen;