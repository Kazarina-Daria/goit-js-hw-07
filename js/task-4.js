const getForm = document.querySelector('.login-form');
getForm.addEventListener('submit', handlerSubmit);

function handlerSubmit(e) {
  e.preventDefault();
  const email = getForm.elements.email.value.trim();
  const password = getForm.elements.password.value.trim();
  if (email === '' || password === '') {
    alert(`All form fields must be filled in`);
    return;
  }

  const form = {
    email,
    password,
  };

  console.log(form);
  
  e.target.reset();
}
