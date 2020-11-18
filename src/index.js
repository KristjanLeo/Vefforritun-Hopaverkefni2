import { element } from './lib/utils';
import fetchVideos from './lib/fetchvideos';

const el = element('div', {}, {}, '');
const parent = document.querySelector('body');
parent.appendChild(el);
fetchVideos();
