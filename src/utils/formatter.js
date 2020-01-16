// this function will format time to 00, 01 ... 10, 11
const formatTime = (time) => (`0${time}`).slice(-2);

export default formatTime;
