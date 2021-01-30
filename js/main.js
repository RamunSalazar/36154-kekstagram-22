/* Взято с https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getNumber(min, max) {
  if (min < 0 || max < 0) {
    console.log("Значения диапазона не могут быт меньше нуля!");
    return 0;
  } else if (max < min) {
    console.log("Максимальное значение диапазона не может быть меньше минимального значения!");
    return 0;
  } else if ( max == min) {
    console.log("Минимальное и максимальное значение диапазона не могут быть одинаковыми!");
    return 0;
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function getLengthString(string, length = "140") {
  return (string.length <= length) ? true : false;
}


const string = "sdgdj dsj jhwr teyi wrty et lsiuefh";
console.log(getNumber(2, 7));
console.log(getLengthString(string));
