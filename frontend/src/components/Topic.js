import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL2 } from "../constants";
import Quiz from "../components/Quiz";
import Lottie from 'lottie-react';
import animationData from '../screens/Animation -Lottie.json';
import './Topic.css';

const Topic = () => {
    const { topicId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await fetch(`${API_URL2}/aiapi/get-questions/?topic=${encodeURIComponent(topicId)}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                console.log(data);
                setQuestions(data.questions);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTopics();
    }, [topicId]);

    const handleAnswer = (correct) => {
        if (correct) setScore(prev => prev + 1)
    };

    const nextQue = () => {
        if (questions.length - 1 > index) {
            setIndex((prev) => prev + 1)
        }
    }

    return (
        <div className="topic">
            <h1>{topicId}</h1>
            {loading && <div className="loading-container">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    className="loading-animation"
                />
            </div>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && (
                <div>
                    {questions.length > 0 && (<h2 className="score" >Your Score: {score}/{questions.length}</h2>)}
                    <ul>
                        {questions && <Quiz
                            key={index}
                            questionData={questions[index]}
                            next={nextQue}
                            index={index}
                            onAnswer={handleAnswer}
                            quizLength={questions.length}
                        />}
                    </ul>
                </div>

            )}
        </div>
    )
}

export default Topic;