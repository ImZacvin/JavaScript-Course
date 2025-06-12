import isWeekend from "./15f.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const today = dayjs();

isWeekend(today);

console.log(isWeekend(today)); // true or false depending on the current day