import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


export default function isWeekend(date) {
  if(date.format('dddd') === 'Saturday' || date.format('dddd') === 'Sunday') {
    return true;
  } else {
    return false;
  }
}
