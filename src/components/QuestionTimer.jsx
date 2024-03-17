import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [
    remainingTime,
    setRemainingTime
  ] = useState(timeout);

  // Set the timeout when timeout or onTimeout changes
  useEffect(() => {
    console.log('SETTING TIMEOUT');
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    }
  }, [timeout, onTimeout]);
  
  // Set the current progress, reduce by 100ms every 100ms
  useEffect(() => {
    console.log('SETTING INTERVAL');
    const interval = setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  

  return <progress id="question-time" max={timeout} value={remainingTime}/>
}
