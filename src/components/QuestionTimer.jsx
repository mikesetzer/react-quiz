import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [
    remainingTime,
    setRemainingTime
  ] = useState(timeout);

  // Set the timeout when timeout or onTimeout changes
  useEffect(() => {
    console.log('SETTING TIMEOUT');
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);
  
  // Set the current progress, reduce by 100ms every 100ms
  useEffect(() => {
    console.log('SETTING INTERVAL');
    setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);
  }, []);

  

  return <progress id="question-time" max={timeout} value={remainingTime}/>
}
