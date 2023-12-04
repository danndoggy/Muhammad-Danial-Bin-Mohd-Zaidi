const deductionForm = document.getElementById('deduction-form');

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("deduction-form").addEventListener("submit", (event) => {
      event.preventDefault();
      alert(`Thank you for filling up the form!\nName: ${document.getElementById("name").value}\nStaff No: ${document.getElementById("staffno").value}\nContact No: ${document.getElementById("contactno").value}\nEmail: ${document.getElementById("email").value}\nMonthly Salary: RM ${parseFloat(document.getElementById("salary").value).toFixed(2)}\nContribution Type: ${document.getElementById("contribution-type").value === "1" ? "Student" : "Staff"}\nStart Date: ${document.getElementById("deduction-start-date").value}\nEnd Date: ${document.getElementById("deduction-end-date").value}\nKulliyyah: ${document.getElementById("kulliyyah").value}`);
  });
});

function calculateDeduction() {
  var salaryInput = document.getElementById('salary');
  var salary = parseFloat(salaryInput.value);

  var deductionAmount = salary * 0.05;

  var deductionAmountSpan = document.getElementById('deduction-amount');
  deductionAmountSpan.textContent = deductionAmount.toFixed(2);
  
}
