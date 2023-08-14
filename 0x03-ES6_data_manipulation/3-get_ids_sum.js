export default function getStudentsIdsSum(listOfStudents) {
  return listOfStudents.reduce((calculate, student) => calculate + student.id, 0);
}
