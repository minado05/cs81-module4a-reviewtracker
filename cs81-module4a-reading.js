// Weekly reading log
// a 2D array which stores data for what book is read for how long and for which day of the week
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 },
];

// Adds a new reading entry to the log
/*
This function's purpose is to add new data entry into reading log. Its inputs are the day, book title, and duration (minutes). This function pushes the new entry into the reading log. 
*/
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes }; //create a new object/entry with given day, book, and minutes values for corresponding properties
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
/*
This function's purspose is to count the total reading minutes for the week. Its input is the reading log. It returns the total minutes read.
*/
function totalReadingMinutes(log) {
  let total = 0;
  // This loop sums the values of the 'minutes' property for all the entries in log
  for (let entry of log) {
    total += entry.minutes; //add the 'minutes' property of the entry to total
  }
  return total;
}

// Returns the book read most frequently
/*
This function's purspose is to find the book read the most. Its input is the reading log. It returns the book title that is most read.
*/
function mostReadBook(log) {
  const bookCounts = {}; //create an empty object
  // This loop goes through each entry and counts  # of times each book appears
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      //if book not yet added to object
      bookCounts[entry.book] = 1; //add to object and set count as 1
    } else {
      //else increment count
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  //this loop finds book with max count by comparing stored max count with each book count
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      //if current book count is bigger than max count, update max
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
/*
This function's purspose is print a sentence summary of each reading log entry for each day. Its input is the reading log. It prints messages to the console.
*/
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
