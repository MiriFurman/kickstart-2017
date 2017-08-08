const twoDigitsNumber = x => x < 10 ? `0${x}` : x;

const utils = {
  getCurrentTime() {
    const time = new Date();
    return `${time.getHours()}:${twoDigitsNumber(time.getMinutes())}:${twoDigitsNumber(time.getSeconds())}`;
  }
};

export default utils;
