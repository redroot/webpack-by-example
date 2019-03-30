import { doubleValue } from './helpers';
import elmApp from './Main';

elmApp.Elm.Main.init({ node: document.querySelector('#main') })
console.log(doubleValue(10));
