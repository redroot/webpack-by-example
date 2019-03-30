import { doubleValue } from './helpers';
// import helpers from './helpers';

// const doubleValue = (x) => x * 2

const myElement = () => {
  let elem = document.createElement('div')
  elem.innerHTML = `Hello my number is ${doubleValue(40)}`;
  return elem;
}

document.body.appendChild(myElement());
