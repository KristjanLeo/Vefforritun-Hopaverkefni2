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
 * Format a timestamp as dd.mm.yyyy hh:mm:ss e.g. "01.11.2020 12:00:00".
 *
 * @param {number} timestamp Unix timestamp to format
 * @returns {string} Formatted string.
 */

export function videoLength(time){
  let hours= Math.floor(time/3600);
  let minutes= Math.floor((time%3600)/60);
  let seconds= time%60;
  return (hours +':'+ minutes + ':' + seconds);
}

export function videoAge(seconds){
  age=(Date.now()-seconds)/1000
  if(age>365*24*60*60){
      return('Fyrir '+Math.floor(age/(365*24*60*60))+' árum síðan');
  }
  else if(age>=30*24*60*60){
      return('Fyrir '+Math.floor(age/(30*24*60*60))+' mánuðum síðan');
  }
  else if(age>=7*24*60*60){
      return('Fyrir '+Math.floor(age/(7*24*60*60))+' vikum síðan');
  }
  else if(age>=24*60*60){
      return('Fyrir '+Math.floor(age/(24*60*60))+' dögum síðan');
  }
  else if(age>=60*60){
      return('Fyrir '+Math.floor(age/(60*60))+' klukkutímum síðan');
  }
  else if(age>=60){
      return('Fyrir '+Math.floor(age/60)+' mínútum síðan');
  }
  else{
      return('Fyrir ')+age+' sekúndum síðan'
  }
}