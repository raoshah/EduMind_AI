import {useState, useEffect} from "react";
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
  },[index])

  return ( <div className="quizbody">
    <div className="quizDiv">

      <h1 className="question" ><b>{index}.</b> {questionData.question}</h1>

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
      {!confirmed &&  (
        <button onClick={handleConfirm} disabled={!selected}>Confirm</button>
      )}

    </div>
    </div>
  );
};

export default Quiz;


