export default function createReportObject(employees) {
  const report = {
    allEmployees: employees,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return report;
}
