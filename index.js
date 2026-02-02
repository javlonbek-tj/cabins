import { add } from 'date-fns';

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

console.log(fromToday(0));
console.log(fromToday(7));
console.log(fromToday(-20, true));
