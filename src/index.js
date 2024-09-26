let now = new Date();
console.log(now);

let milliseconds = now.getMilliseconds();
console.log(milliseconds);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
console.log(day);

let year = now.getFullYear();
console.log(year);

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
console.log(month);

//JS Challenge 6
//Display the current date following the following format: Today is Thursday, April 4, 2020
let date = now.getDate();

console.log(`Today is ${day}, ${month} ${date}, ${year}`);
//JS Challenge 7
//Create a function formatDate which returns a date following this format: Thursday, April 4, 2020 Call this function with the current time Log the result such as console.log(formatDate(new Date()));
function formatDate(date) {
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let dayOfMonth = date.getDate();

  return `${day}, ${month} ${dayOfMonth}, ${year}`;
}

console.log(formatDate(new Date()));
