// Write a JavaScript function to get humanized number with the correct suffix such as
// 1st, 2nd, 3rd or 4th.

// Test Data:
// console.log(humanize(1));
// console.log(humanize(20));
// console.log(humanize(302));
// "1st"
// "20th"
// "302nd"
function humanize(num) {
  if (!num) {
    return undefined;
  }
  let str = num.toString();
  let lastNumber = str.charAt(str.length - 1);

  if (lastNumber === "1") {
    return str + "st";
  } else if (lastNumber === "2") {
    return str + "nd";
  } else if (lastNumber === "3") {
    return str + "rd";
  } else {
    return str + "th";
  }
}

console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(303));
