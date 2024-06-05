const formData = {
    email: "",
    message: "",
};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('submit', myForm);

function myForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  
  if (email === '' || message === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(`email: ${email}`, `message: ${message}`);
    formEl.reset();
  }
};

formEl.addEventListener('input', () => {
  const formData = new FormData(formEl);
  const email = formData.get('email');
  const message = formData.get('message');
  const data = { email, message };
  saveToLS('formData', data);
});

window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS('formData');
  formEl.elements.email.value = data?.email || '';
  formEl.elements.message.value = data?.message || '';
});

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
   const formData = new FormData(formEl);
  const email = formData.get('email');
  const message = formData.get('message');
  const data = { email, message };
  console.log(data);
  formEl.reset();
  localStorage.removeItem('formData');
})

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}
 
function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  }
  catch {
   return json;
  }
}

