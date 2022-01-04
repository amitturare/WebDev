const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// ******** Setting Giveaway Date ********
// Select giveaway, deadline and items
const giveawayDate = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// Make a setup so that projects lives forever
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2024, 0, 2, 11, 30, 0); // Months and week days are zero indexed
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
giveawayDate.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

// ******** Remaining Time ********
// Create a function to get remaining time
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today; // this will be in ms
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1day = 24hrs
  // Get values in ms
  const oneDay = 24 * 60 * 60 * 1000; // 86400000
  const oneHour = 60 * 60 * 1000; // 3600000
  const oneMin = 60 * 1000; // 60000

  // Calculate values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMin);
  let secs = Math.floor((t % oneMin) / 1000);

  // Set values in a array
  const result = [days, hours, mins, secs];

  // Text formatting
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(result[index]);
  });

  // What if t is < 0
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
}
// Live countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
