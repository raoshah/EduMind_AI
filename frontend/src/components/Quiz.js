import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './Quiz.css';

const Quiz = ({ questionData, next, index, onAnswer, quizLength }) => {
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
    return ""
  };

  useEffect(() => {
    setSelected(null)
    setConfirmed(false);
  }, [index])

  return (
    <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{ duration: 0.3 }}
> 
  <div className="quizbody">
    <div className="quizDiv">

      <h2 className="question" ><b>{index + 1}.</b>  {questionData.question}</h2>

      {Object.entries(questionData.options).map(([key, value]) => (

        <p onClick={() => handleSelect(key)} key={key} className={`option ${getStyle(key)}`} style={{ cursor: 'pointer' }}>
          <b>{key}: </b>{value}
        </p>
        
      ))}

      {confirmed && (<div class="explanation"> <strong>Explanation:</strong> {questionData.explanation} </div>)}

      <div className="buttonDiv">
        {confirmed && index < quizLength - 1 && (<button className="stylish-btn" onClick={next}>Next</button>)}
        {!confirmed && (<button className="stylish-btn" onClick={handleConfirm} disabled={!selected}>Confirm</button>)}
      </div>

    </div>

  </div>
  </motion.div>
  )
};

export default Quiz;


