// Function to get student information and marks
function getStudentInfo() {
    let studentName = prompt("Enter student's name:");
    let subjects = ["Math", "Science", "English", "History", "Computer"];
    let marks = [];

    for (let i = 0; i < subjects.length; i++) {
        let mark = prompt(`Enter marks for ${subjects[i]} (out of 100):`);
        marks.push(Number(mark));
    }

    return { name: studentName, subjects: subjects, marks: marks };
}

// Function to calculate percentage
function calculatePercentage(marks) {
    let totalMarks = marks.reduce((a, b) => a + b, 0);
    let percentage = (totalMarks / (marks.length * 100)) * 100;
    return percentage;
}

// Function to find grade based on percentage
function findGrade(percentage) {
    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Function to determine scholarship discount
function scholarshipDiscount(percentage) {
    if (percentage >= 90) {
        return "Congratulations! You qualify for a 50% scholarship.";
    } else if (percentage >= 80) {
        return "Great job! You qualify for a 30% scholarship.";
    } else if (percentage >= 70) {
        return "Good work! You qualify for a 10% scholarship.";
    } else {
        return "Unfortunately, no scholarship is available.";
    }
}

// Function to render student marksheet
function renderMarksheet() {
    let studentInfo = getStudentInfo();
    let percentage = calculatePercentage(studentInfo.marks);
    let grade = findGrade(percentage);
    let scholarship = scholarshipDiscount(percentage);

    // Render student name
    let nameElement = document.getElementById("studentName");
    nameElement.textContent = `Marksheet for ${studentInfo.name}`;

    // Render marks table
    let marksTable = document.getElementById("marksData");
    marksTable.innerHTML = "";  // Clear any previous data

    for (let i = 0; i < studentInfo.subjects.length; i++) {
        let row = document.createElement("tr");
        let subjectCell = document.createElement("td");
        let marksCell = document.createElement("td");

        subjectCell.textContent = studentInfo.subjects[i];
        marksCell.textContent = studentInfo.marks[i];

        row.appendChild(subjectCell);
        row.appendChild(marksCell);
        marksTable.appendChild(row);
    }

    // Render percentage
    let percentageElement = document.getElementById("percentage");
    percentageElement.textContent = `Percentage: ${percentage.toFixed(2)}%`;

    // Render grade
    let gradeElement = document.getElementById("grade");
    gradeElement.textContent = `Grade: ${grade}`;

    // Render scholarship
    let scholarshipElement = document.getElementById("scholarship");
    scholarshipElement.textContent = scholarship;
    if (percentage >= 70) {
        scholarshipElement.classList.add("scholarship");
    }
}

// Call render function on page load
renderMarksheet();
