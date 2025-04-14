import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from './redux/quizSlice';
import Quiz from './components/QuizScreen';
import './App.css';

function App() {
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
    if(data.length - 1 > index) {
      setIndex((prev) => prev + 1)
    } 
  }

  const handleAnswer = (correct) => {
    if (correct) setScore(prev => prev + 1);
  };
 
  return (
    <div className="App">
  <div className="input-wrapper">
  <input
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
    placeholder="Enter topic"
    className="styled-input"
  />
  <button onClick={handlePrompt} className="input-button">
    Get Questions
  </button>
</div>
{data.length > 0 && (
  <h2 style={{
    backgroundColor: '#e0f2fe',
    color: '#0c4a6e',
    padding: '8px 16px',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '16px',
    marginTop: '16px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)'
  }}>
    Your Score: {score}/{data.length}
  </h2>
)}

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
    </div>
  );
}

export default App;

