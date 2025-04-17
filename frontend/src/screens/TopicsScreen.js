import { useEffect, useState } from "react";
import { API_URL2 } from "../constants";

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
    }
    , []); 


    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && (
                <div>
                    <h1>Topics</h1>
                    <ul>
                        {topics && topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                        ))}
                    </ul>
                </div>
            )}
            
        </div>
    );
}
    

export default Topics;