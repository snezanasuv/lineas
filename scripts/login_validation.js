const form = document.querySelector('.login_form');
const phoneInput = form.querySelector('.phone');
const passwordInput = form.querySelector('.password');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const phone = phoneInput.value;
  const password = passwordInput.value;
  
  if (!phone || !password) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  if (!isValidPhone(phone)) {
    alert('Телефон может содержать только цифры');
    return;
  }
  
  if (!isValidPassword(password)) {
    alert('Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру');
    return;
  }
  
  form.submit();
});

function isValidPhone(phone) {
  const pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/;
  return pattern.test(phone);
}

function isValidPassword(password) {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/;
  return pattern.test(password);
}