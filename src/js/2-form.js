const formData = {
    email: "",
    message: "",
};

const formEl = document.querySelector('.feedback-form');
let inputArr = document.querySelectorAll('input');
inputArr = Array.from(inputArr);
formEl.addEventListener('submit', myForm);
function myForm(event) {
  event.preventDefault();
  let isValid = false;
  // перевірка на ісвалід
  inputArr.forEach(input => {
    if (input.value) {
      isValid = true;
    } else {
      isValid = false;
      formEl.reset();
    }
  });
  if (!isValid) {
    alert('All form fields must be filled in');
  } else {
    let valueObj = { email: '', password: '' };
    valueObj.email = inputArr[0].value;
    valueObj.password = inputArr[1].value;
    formEl.reset();
    return console.log(valueObj);
  }
}