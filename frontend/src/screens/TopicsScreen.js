import { useEffect, useState } from "react";
import { API_URL2 } from "../constants";
import { Link } from "react-router-dom";
import './TopicsScreen.css';
import Lottie from 'lottie-react';
import animationData from './Animation -Lottie.json';


const Topics = () => {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await fetch(`${API_URL2}/aiapi/get-topics/`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                console.log(data);
                setTopics(data.topics);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopics();
    }, []);


    return (
        <div className="topics-container">
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
                    <h1>Topics</h1>
                    <ul>
                        {topics && topics.map((topic, index) => (
                            <li key={index}>
                                <Link to={`/topic/${topic}`}>{topic}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}


export default Topics;