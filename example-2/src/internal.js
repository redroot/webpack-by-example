import { doubleValue, tripleValue } from './helpers/math';
import buildInfo from './helpers/info';

const myElement = () => {
  let elem = document.createElement('div')
  elem.innerHTML = `Hello my secret number is ${doubleValue(40)} and the secret info is: ${buildInfo()}`;
  return elem;
}

document.body.appendChild(myElement());
