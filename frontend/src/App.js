import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions } from './redux/quizSlice';
import Quiz from './components/QuizScreen';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState("");
  const [index, setIndex] = useState(0)

  const { loading, data, error } = useSelector((state) => state.quizSlice);
  const dispatch = useDispatch();

  const handlePrompt = () => {
    dispatch(getQuestions({ prompt }));
  };

  const nextQue = () => {
    if(data.length - 1 > index) {
      setIndex((prev) => prev + 1)
    } else {
      setIndex(0)
    }
   
  }
 
  return (
    <div className="App">
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter topic"
        className="input"
      />
      <button onClick={handlePrompt}>Get Questions</button>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {data.length > 0 && (
        <Quiz 
        questionData={data[index]}
        next={nextQue}
        index={index}
         />
      )}
    </div>
  );
}

export default App;

