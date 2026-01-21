// ========== TASK 1: Create a student object ==========
// Properties: name (string), age (number), grades (array of numbers)
let student = {
  // your code here
  name: "Judy",
  age: 21,
  grades: [85, 90, 78, 95]
};


// ========== TASK 2: Calculate average grade ==========
// Loop through grades array and return the average
function getAverage(grades) {
  // your code here
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  let average = sum / grades.length
  return average;
}


// ========== TASK 3: Get letter grade ==========
// 90+ = "A", 80+ = "B", 70+ = "C", 60+ = "D", below = "F"
function getLetterGrade(average) {
  // your code here (use if/else)
  if (average >= 90) {
    return "A";
  }
  else if (average >= 80) {
    return "B";
  }
  else if (average >= 70) {
    return "C";
  }
  else if (average >= 60) {
    return "D";
  }
  else {
    return "F";
  }
}


// ========== TASK 4: Check if passed ==========
// Return true if average >= 60 AND no grade below 50
function hasPassed(grades) {
  // your code here (use logical operators)
  if (getAverage(grades) < 60) {
    return false;
  }

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 50) {
      return false;
    }
  }

  return true;
}


// ========== TASK 5: Find highest grade ==========
// Use a while loop to find the highest grade
function getHighest(grades) {
  // your code here
  let highest = grades[0];
  let i = 0;

  while (i < grades.length) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
    i++;
  }
  return highest;
}


// ========== TASK 6: Create 3 students ==========
var students = [
  // add 3 student objects here
  {
    name: "Eleven",
    age: 16,
    grades: [85, 90, 78, 95]
  },
  {
    name: "Mike",
    age: 17,
    grades: [70, 65, 85, 68]
  },
  {
    name: "Max",
    age: 16,
    grades: [55, 60, 70, 48]
  }

];


// ========== TASK 7: Display all results ==========
// Loop through students and console.log a summary for each
for (let i = 0; i < students.length; i++) {
  // your code here
  let average = getAverage(students[i].grades);
  let letterGrade = getLetterGrade(average);
  let passed = hasPassed(students[i].grades);
  let highest = getHighest(students[i].grades);
  
  console.log(students[i].name);
  console.log("Average: " + avg.toFixed(2));
  console.log("Letter Grade: " + letterGrade);
  console.log("Passed: " + passed);
  console.log("Highest: " + highest);
  console.log("");
}

// ========= a random function =============
function mathOperation() {
    function findMin(arr) {
        // your code goes here
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
}