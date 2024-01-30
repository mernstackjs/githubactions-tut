function createStudent(name, grade) {
  return {
    name: name,
    grade: grade,
    roleNumber: null,
  };
}

const generateRoleNumber = (students) => {
  students.forEach((student, index) => {
    student.roleNumber = index + 1;
  });
};

const students = [
  createStudent("Alice", "10th"),
  createStudent("Bob", "11th"),
  createStudent("Charlie", "12th"),
  createStudent("Ahmed", "12th"),
  createStudent("Ashrofiin", "12th"),
];

generateRoleNumber(students);

console.log(students);
const findByName = (name) => {
  const student = students.find((sn) => sn.name == name);
  return student ? student : `Don't find this ${name} in owr system`;
};

console.log(findByName("Huda Ahmed"));
