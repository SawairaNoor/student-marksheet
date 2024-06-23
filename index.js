// Total marks possible for both subjects
const totalMarks = 200;

// Array of student objects
const students = [
  {
    name: "Ali",
    scienceMarks: 90,
    englishMarks: 70,
  },
  {
    name: "Huzaifa",
    scienceMarks: 10,
    englishMarks: 40,
  },
  {
    name: "Asim",
    scienceMarks: 40,
    englishMarks: 60,
  },
];

// Function to calculate total marks and percentage for a student
function calculateMarks(student) {
  const total = student.scienceMarks + student.englishMarks; // Sum of marks in both subjects
  const percentage = (total / totalMarks) * 100; // Calculate percentage
  return { percentage, total }; // Return the total and percentage
}

// Function to create and display the marksheet
function displayMarksheet() {
  const marksheet = document.getElementById('marksheet');
  
  students.forEach((student, index) => {
    const result = calculateMarks(student); // Calculate marks for current student
    
    const studentDiv = document.createElement('div');
    studentDiv.className = 'student';
    
    const studentName = document.createElement('h2');
    studentName.textContent = `Name: ${student.name}`;
    studentDiv.appendChild(studentName);
    
    const scienceMarks = document.createElement('p');
    scienceMarks.textContent = `Science: ${student.scienceMarks}`;
    studentDiv.appendChild(scienceMarks);
    
    const englishMarks = document.createElement('p');
    englishMarks.textContent = `English: ${student.englishMarks}`;
    studentDiv.appendChild(englishMarks);
    
    const totalMarks = document.createElement('p');
    totalMarks.textContent = `Total Marks: ${result.total}`;
    studentDiv.appendChild(totalMarks);
    
    const percentage = document.createElement('p');
    percentage.textContent = `Percentage: ${result.percentage.toFixed(2)}%`;
    studentDiv.appendChild(percentage);
    
    const status = document.createElement('p');
    status.className = 'result';
    status.textContent = result.percentage >= 40 ? "PASSED" : "FAILED";
    studentDiv.appendChild(status);
    
    marksheet.appendChild(studentDiv);
  });
}

// Initialize the marksheet on page load
window.onload = displayMarksheet;




