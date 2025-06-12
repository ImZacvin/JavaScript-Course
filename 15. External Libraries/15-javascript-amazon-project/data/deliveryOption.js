import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) =>  {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}

export function calculateDeliveryDate(deliveryOption) {
  const today = dayjs();
  let totalDays = 0;
  let i = 0;

  while (i < deliveryOption.deliveryDays) {
    if (isWeekend(today.add(totalDays + 1, 'days'))){
      totalDays++;
      continue;
    }

    totalDays++;
    i++;
  }

  const deliveryDate = today.add(totalDays, 'days');
  const dateString = deliveryDate.format('dddd, MMMM D');

  return dateString;
}

export function isWeekend(date) {
  if(date.format('dddd') === 'Saturday' || date.format('dddd') === 'Sunday') {
    return true;
  } else {
    return false;
  }
}
