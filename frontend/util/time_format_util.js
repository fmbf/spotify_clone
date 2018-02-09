const timeFormat = (value) => {

  let time;


  
  if (value) {
    time = Math.floor(value);
    if (time >= 60) {
      let minutes = Math.floor(time/60);
      let seconds = time % 60;
      if (seconds >= 10) {
        time = `0${minutes}:${seconds}`;
      } else {
        time = `0${minutes}:0${seconds}`;
      }
    } else {
      if (time >= 10) {
        time = `00:${time}`;
      } else {
        time = `00:0${time}`;
      }
    }
    return time;
  } else {
    return "00:00";
  }
};

export default timeFormat;
