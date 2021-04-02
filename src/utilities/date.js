export const makeDate = () => {
    const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

    const today = new Date();
    let minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()} ${today.getHours()}:${minutes}`;
}

export const makeYear = () => {
    const d = new Date();
    return d.getFullYear();
}

export default makeDate;