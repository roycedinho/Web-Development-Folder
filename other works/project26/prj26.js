function showStudentInfo() {
    // Step 1: Create object variables
    let student1 = { name: "Royce", age: 14, grade: "Year 9" };
    let student2 = { name: "Tofunmi", age: 14, grade: "Year 9" };

    // Step 2: Store objects in an array
    let students = [student1, student2];

    // Step 3: Access using object keys and array index
    let output = `
    <p><strong>Student 1 Name:</strong> ${student1.name}</p>
    <p><strong>Student 2 Grade:</strong> ${student2.grade}</p>
    <p><strong>First student (object):</strong> ${JSON.stringify(students[0])}</p>
    <p><strong>Second student's age:</strong> ${students[1].age}</p>
    <hr>
    <p><strong>All names joined:</strong> ${[student1.name, student2.name].join(", ")}</p>
    <hr>
  `;

    // Step 4: Use pop() to remove the last item
    let removedStudent = students.pop();

    output += `
    <p><strong>Removed student:</strong> ${JSON.stringify(removedStudent)}</p>
    <p><strong>Remaining students:</strong> ${JSON.stringify(students)}</p>
  `;

    // Step 5: Display in the HTML using DOM
    document.getElementById("output").innerHTML = output;
}
