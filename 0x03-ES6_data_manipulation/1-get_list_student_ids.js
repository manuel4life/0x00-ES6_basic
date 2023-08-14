export default function getListOfStudentIds(arrayStudents) {
  if (!Array.isArray(arrayStudents)) {
    return [];
  }

  return arrayStudents.map(student => student.id);
}

