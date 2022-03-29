import { useState, useEffect } from "react";

const useTimeStates = () => {
  const [secondsCounter, setSecondsCounter] = useState("00");
  const [minutesCounter, setMinutesCounter] = useState("00");
  const [hoursCounter, setHoursCounter] = useState("00");
  const [startCountdown, setStartCountdown] = useState(false);
  const [finishCountdown, setFinishCountdown] = useState(false);
  const [playSelected, setPlaySelected] = useState(false);
  const [pauseSelected, setPauseSelected] = useState(false);

  useEffect(() => {
    let oneSecondInterval;
    if (startCountdown) {
      oneSecondInterval = setInterval(() => {
        let seconds = Number(secondsCounter);
        let minutes = Number(minutesCounter);
        let hours = Number(hoursCounter);

        if (hours === 2 && minutes === 0 && seconds === 0) {
          hours = 1;
          minutes = 59;
          seconds = 59;
        } else if (hours === 1 && minutes === 0 && seconds === 0) {
          hours = 0;
          minutes = 59;
          seconds = 59;
        } else if (hours === 0 && minutes === 0 && seconds === 0) {
          setStartCountdown(false);
          setPlaySelected(false);
          setFinishCountdown(true);
        } else if ((hours === 0 || hours === 1) && seconds > 0) {
          seconds = seconds - 1;
        } else if ((hours === 1 || hours === 0) && seconds === 0) {
          seconds = 59;
          minutes = minutes - 1;
        }

        setSecondsCounter(
          String(seconds).length === 1 ? `0${seconds}` : seconds
        );
        setMinutesCounter(
          String(minutes).length === 1 ? `0${minutes}` : minutes
        );
        setHoursCounter(String(hours).length === 1 ? `0${hours}` : hours);
      }, 1000);
    }
    return () => clearInterval(oneSecondInterval);
  }, [hoursCounter, minutesCounter, secondsCounter, startCountdown]);

  return {
    secondsCounter,
    setSecondsCounter,
    minutesCounter,
    setMinutesCounter,
    hoursCounter,
    setHoursCounter,
    startCountdown,
    setStartCountdown,
    playSelected,
    setPlaySelected,
    pauseSelected,
    setPauseSelected,
    finishCountdown,
    setFinishCountdown,
  };
};

export default useTimeStates;
