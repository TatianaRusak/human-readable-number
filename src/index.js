let units = ['zero', 'one','two','three','four', 'five','six','seven','eight','nine', 'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
let tens = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

module.exports = function toReadable(num) {

  let numStr = num.toString();

  let firstNumber = Number(numStr[0]);
  let secondNumber = Number(numStr[1]);
  let thirdNumber = Number(numStr[2]);
  let numEnd = Number(numStr.slice(-2));

  if (num <= 19) {
    return units[num];
  } else if (19 < num && num < 99 && !(num % 10)) {
    return tens[firstNumber - 2];
  } else if (num > 99 && (num % 100 === 0)) {
    return `${units[firstNumber]} hundred`;
  } else if (num < 100 && (num % 10 !== 0)) {
    return `${tens[firstNumber - 2]} ${units[secondNumber]}`;
  } else if (num > 100 && numEnd < 20) {
    return `${units[firstNumber]} hundred ${units[numEnd]}`;
  } else if (num > 100 && (numEnd % 10 === 0)) {
    return `${units[firstNumber]} hundred ${tens[secondNumber - 2]}`;
  } else {
    return `${units[firstNumber]} hundred ${tens[secondNumber - 2]} ${units[thirdNumber]}`
  }
}
