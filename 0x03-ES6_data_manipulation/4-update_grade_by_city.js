export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents
     .filter(student => student.location === city)
     .map(student => {
       const studentGrade = newGrades.find(grade => grade.studentId === student.id);
       const grade = studentGrade ? studentGrade.grade : 'N/A';

       return { ...student, grade };
     });
}

