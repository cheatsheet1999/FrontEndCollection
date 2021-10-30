
#### Given a date string in the form Day Month Year, where:

- **Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.**
- **Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.**
- **Year is in the range [1900, 2100].**

#### Convert the date string to the format YYYY-MM-DD, where:

- **YYYY denotes the 4 digit year.**
- **MM denotes the 2 digit month.**
- **DD denotes the 2 digit day.**

<img width="443" alt="Screen Shot 2021-10-29 at 10 27 40 PM" src="https://user-images.githubusercontent.com/37787994/139521496-3de2ce3e-c56f-4f25-9ca5-5b21811259b5.png">


```JS
var reformatDate = function (date) {
  const m = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const [day, month, year] = date.split(" ");

  // put a 0 on the front so it will show 01, 02, 03 etc..
  return year + "-" + m[month] + "-" + (parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day));
};
```
