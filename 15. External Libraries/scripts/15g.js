import isSatSun from "./15f.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const today = dayjs();

isSatSun(today);

console.log(isSatSun(today)); // true or false depending on the current day