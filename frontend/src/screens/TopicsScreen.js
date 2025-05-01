import { useEffect, useState } from "react";
import { API_URL2 } from "../constants";
import { Link } from "react-router-dom";
import './TopicsScreen.css';
import Lottie from 'lottie-react';
import animationData from './Animation -Lottie.json';
import { motion } from "framer-motion";

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
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {loading && <div className="loading-container">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    className="loading-animation"
                />
            </div>}
            <div className="topics-container">
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
        </motion.div>
    );
}


export default Topics;