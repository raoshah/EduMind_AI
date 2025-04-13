import {useState, useEffect} from "react";
import './QuizScreen.css';

const Quiz = ({ questionData, next, index }) => {
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false);

  const handleSelect = (option) => {
    if (!confirmed) setSelected(option);
  }


  const getStyle = (option) => {
    if (selected === option) return "wrong";
    return "correct"
  };

  useEffect(() => {
    setSelected(null)
  },[index])

  return (
    <div className="quizDiv">

      <h1><b>Question: </b> {questionData.question}</h1>

      {Object.entries(questionData.options).map(([key, value]) => (
        <p
          onClick={() => handleSelect(key)}
          key={key}
          className={`option ${getStyle(key)}`}
          style={{cursor:'pointer'}}
        >

          <b>{key}: </b>{value}
        </p>
      ))}

      <button onClick={next}>Next</button>

    </div>
  );
};

export default Quiz;


