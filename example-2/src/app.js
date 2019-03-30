import { doubleValue } from './helpers/math';

const myElement = () => {
  let elem = document.createElement('div')
  elem.innerHTML = `Hello my public facing number  is ${doubleValue(40)}`;
  return elem;
}

document.body.appendChild(myElement());
