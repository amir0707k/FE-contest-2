const students = [
  {
    ID: 1,
    name: 'Alice',
    age: 21,
    grade: 'A',
    degree: 'Btech',
    email: 'alice@example.com'
  },
  {
    ID: 2,
    name: 'Bob',
    age: 22,
    grade: 'B',
    degree: 'MBA',
    email: 'bob@example.com'
  },
  {
    ID: 3,
    name: 'Charlie',
    age: 20,
    grade: 'C',
    degree:'Arts',
    email: 'charlie@example.com'
  }
]; 


const tableElement = document.getElementsByTagName("table")[0];
const addButtonElement = document.querySelector(".add");
const editButtonElement = document.querySelector(".edit");
renderStudents();
addButtonElement.addEventListener("click", updateTable);


let currentEditIndex ;

function updateTable(event){
    event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const grade = document.getElementById("gpa").value.trim();
  const age = document.getElementById("age").value.trim();
  const degree = document.getElementById("degree").value.trim();

  
    if (
      name === "" ||
      email === "" ||
      grade === "" ||
      age === "" ||
      degree === ""
    ) {
      alert("Please fill out all required fields");
      return;
    }

    let ID = students.length;
    const userObj = {
        ID: ID+1,
        name:name,
        age: age,
        grade: grade,
        degree: degree,
        email:email
    };

    students.push(userObj);
    renderStudents();


   clearInputFields();
}

function clearInputFields() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("gpa").value = "";
  document.getElementById("age").value = "";
  document.getElementById("degree").value = "";

}

function edit(ID){
    const index = students.findIndex((element) => element.ID === ID);
    document.getElementById("name").value = students[index].name;
    document.getElementById("email").value = students[index].email;
    document.getElementById("gpa").value = students[index].grade;
    document.getElementById("age").value = students[index].age;
    document.getElementById("degree").value = students[index].degree;
    
    currentEditIndex = index;
}


function deleteElement(ID){
    const index = students.findIndex((element) => element.ID === ID);
    students.splice[index,1];
}

function renderStudents(){
    tableElement.innerHTML = `<tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>GPA</th>
            <th>Degree</th>
          </tr>
`;
    for(let i = 0;i<students.length;i++){
    const rowElement = document.createElement("tr");
    const ID = document.createElement("td");
    const name = document.createElement("td");
    const age = document.createElement("td");
    const grade = document.createElement("td");
    const degree = document.createElement("td");
    const email = document.createElement("td");

    ID.innerText = students[i].ID;
    name.innerText = students[i].name;
    email.innerText = students[i].email;
    age.innerText = students[i].age;
    grade.innerText = students[i].grade;
    degree.innerHTML = `<div class="course-edit">
                <span>${students[i].degree}</span>
                <div class="edit-delete">
                  <span class="material-symbols-outlined edit editButton" onclick="edit(${students[i].ID})">
                    edit_square
                  </span>
                  <span class="material-symbols-outlined delete deleteButton onclick="delete(${students[i].ID})"> 
                    delete 
                  </span>
                </div>
              </div>`;
    


    rowElement.append(ID,name,email,age,grade,degree);
    tableElement.appendChild(rowElement);



}
}

function saveEdit(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const grade = document.getElementById("gpa").value;
    const age = document.getElementById("age").value;
    const degree = document.getElementById("degree").value;


    if (
        name === "" ||
        email === "" ||
      grade === "" ||
      age === "" ||
      degree === ""
    ) {
      alert("Please fill out all required fields");
      return;
    }

    students[currentEditIndex].name = name;
    students[currentEditIndex].email = email;
    students[currentEditIndex].grade = grade;
    students[currentEditIndex].age = age;
    students[currentEditIndex].degree = degree;

    currentEditIndex = null;
    renderStudents();

    clearInputFields();
}

