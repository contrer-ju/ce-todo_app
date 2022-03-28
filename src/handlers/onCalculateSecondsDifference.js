export default function onCalculateSecondsDifference(
  task,
  hoursCounter,
  minutesCounter,
  secondsCounter
) {
  const secondsNumber =
    Number(task.substring(0, 2)) * 3600 +
    Number(task.substring(3, 5)) * 60 +
    Number(task.substring(6)) -
    (hoursCounter * 3600 + minutesCounter * 60 + secondsCounter * 1);

  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let seconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return hours + ":" + minutes + ":" + seconds;
}
