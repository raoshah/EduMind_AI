import { useState, useEffect } from "react";
import './QuizScreen.css';

const Quiz = ({ questionData, next, index, onAnswer }) => {
  const [selected, setSelected] = useState(null)
  const [confirmed, setConfirmed] = useState(false);

  const handleSelect = (option) => {
    if (!confirmed) setSelected(option);
  }

  const handleConfirm = () => {
    if (selected) {
      setConfirmed(true);
      onAnswer(selected === questionData.answer);
    }
  };


  const getStyle = (option) => {
    if (!confirmed) return selected === option ? "selected" : "";
    if (option === questionData.answer) return "correct";
    if (option === selected) return "wrong";
    return "";
  };

  useEffect(() => {
    setSelected(null)
    setConfirmed(false);
  }, [index])

  return (<div className="quizbody">
    <div className="quizDiv">

      <h1 className="question" ><b>{index + 1}.</b> {questionData.question}</h1>

      {Object.entries(questionData.options).map(([key, value]) => (
        <p
          onClick={() => handleSelect(key)}
          key={key}
          className={`option ${getStyle(key)}`}
          style={{ cursor: 'pointer' }}
        >

          <b>{key}: </b>{value}
        </p>
      ))}
      {confirmed && (<div class="explanation">
    <strong>Explanation:</strong> {questionData.explanation}
    </div>) }


    <div className="buttonDiv">
      {confirmed && (<button className="stylish-btn" onClick={next}>Next</button>) }
    
      {!confirmed && (
        <button className="stylish-btn" onClick={handleConfirm} disabled={!selected}>Confirm</button>
      )}
    </div>
      
   
    </div>
  </div>
  );
};

export default Quiz;


