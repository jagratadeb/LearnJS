let isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapYear(1924));
console.log(isLeapYear(1925));

console.log(isLeapYear(1948));
console.log(isLeapYear(1947));

console.log(isLeapYear(1972));
console.log(isLeapYear(1973));

console.log(isLeapYear(2000));
console.log(isLeapYear(2001));

console.log(isLeapYear(2004));
console.log(isLeapYear(2005));

console.log(isLeapYear(2008));
console.log(isLeapYear(2012));
