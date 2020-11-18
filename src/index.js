import { element } from './lib/utils';

const el = element('div', {}, {}, '');
const parent = document.querySelector('body');
parent.appendChild(el);
