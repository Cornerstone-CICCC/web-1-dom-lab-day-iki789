const form = document.getElementsByTagName("form")[0];
const employeeList = document.getElementById("employeeList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  const row = generateRow(formProps);

  employeeList.insertAdjacentHTML("beforeend", row);

  e.target.reset();

  return false;
});

const generateRow = (data) => {
  const { firstname, lastname, email, hire_date, photo } = data;
  const content = `
    <tr>
      <td><img src="./images/${photo.name}" alt="image of ${firstname} ${lastname}" /></td>
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${email}</td>
      <td>${hire_date}</td>
      <td>
        <button class="removeBtn" onclick="removeRow(this)">Delete</button>
      </td>
    </tr>
  `;

  return content;
};

const removeRow = (e) => {
  const row = e.parentElement.parentElement;
  if (confirm("Are you sure you want to delete this employee?") === true)
    row.remove();
};
