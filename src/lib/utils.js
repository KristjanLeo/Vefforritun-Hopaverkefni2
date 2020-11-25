/**
 * Create an element with attributes and events, and append elements or
 * strings to it.
 *
 * Usage:
 *  const el = element(
 *    'button',
 *    { 'class': 'button' },
 *    { click: () => { ... } },
 *    'Takki'
 *   );
 *  returns
 *  <button class="button">Takki</button> with a click handler.
 *
 * @param {string} name Element name
 * @param {object} attributes Object containing attributes to attach to element.
 * @param {object} events Object of events to add to element.
 * @param  {...any} children List of elements or strings to append to element.
 * @returns {object} HTML element.
 */
export function element(name, attributes = null, events = null, ...children) {
  const el = document.createElement(name);

  for (let i = 0; i < children.length; i += 1) {
    if (attributes) {
      Object.keys(attributes).forEach((key) => {
        el.setAttribute(key, attributes[key]);
      });
    }

    if (events) {
      Object.keys(events).forEach((key) => {
        el.addEventListener(key, events[key]);
      });
    }

    if (typeof children[i] === 'string') {
      el.appendChild(document.createTextNode(children[i]));
    } else {
      el.appendChild(children[i]);
    }
  }

  return el;
}

/**
 * Tekur inn tíma í sekúndum og skilar fallegum tíma ... TODO
 * @param  {int} time Tími í sekúndum
 * @return {string}   Fallegur tími
 */
export function videoLength(time) {
  const hours = Math.floor(time / 3600) > 0 ? `${Math.floor(time / 3600)}:` : '';
  let minutes;
  if (Math.floor((time % 3600) / 60) > 0 && Math.floor((time % 3600) / 60) < 10) {
    minutes = `${Math.floor((time % 3600) / 60)}:`;
  } else if (Math.floor((time % 3600) / 60) > 0) {
    minutes = `0${Math.floor((time % 3600) / 60)}:`;
  } else {
    minutes = '00:';
  }
  const seconds = time % 60 > 10 ? time % 60 : `0${time % 60}`;
  return (hours + minutes + seconds);
}

export function videoAge(seconds) {
  const age = (Date.now() - seconds) / 1000;
  if (age > 365 * 24 * 60 * 60) {
    return (`Fyrir ${Math.floor(age / (365 * 24 * 60 * 60))} árum síðan`);
  }
  if (age >= 30 * 24 * 60 * 60) {
    return (`Fyrir ${Math.floor(age / (30 * 24 * 60 * 60))} mánuðum síðan`);
  }
  if (age >= 7 * 24 * 60 * 60) {
    return (`Fyrir ${Math.floor(age / (7 * 24 * 60 * 60))} vikum síðan`);
  }
  if (age >= 24 * 60 * 60) {
    return (`Fyrir ${Math.floor(age / (24 * 60 * 60))} dögum síðan`);
  }
  if (age >= 60 * 60) {
    return (`Fyrir ${Math.floor(age / (60 * 60))} klukkutímum síðan`);
  }
  if (age >= 60) {
    return (`Fyrir ${Math.floor(age / 60)} mínútum síðan`);
  }

  return `Fyrir ${age} sekúndum síðan`;
}
