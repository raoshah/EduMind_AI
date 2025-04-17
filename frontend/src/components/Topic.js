import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL2 } from "../constants";


const Topic = () => {
    const { topicId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await fetch(`${API_URL2}/aiapi/get-questions/${topicId}/`);
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
    },[topicId]);

    
    return (
        <div className="topic">
            <h1>{topicId}</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && (
                <div>
                    <h2>Questions</h2>
                    <ul>
                        {questions && questions.map((obj, index) => (
                            <li key={index}>{obj.question}</li>
                        ))}
                    </ul>
                </div>

            )};
        </div>
    );
}

export default Topic;