const form = document.querySelector('.regis_form');
const nameInput = form.querySelector('.name');
const surnameInput = form.querySelector('.surname')
const patronymicInput = form.querySelector('.patronymic');
const phoneInput = form.querySelector('.phone');
const passportSeriesInput = form.querySelector('.passport_series');
const passportIdInput = form.querySelector('.passport_id');
const passwordInput = form.querySelector('.password');
const confirmPasswordInput = form.querySelector('.confirmPassword');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const name = nameInput.value;
  const surname = surnameInput.value;
  const patronymic = patronymicInput.value;
  const phone = phoneInput.value;
  const passportSeries = passportSeriesInput.value;
  const passportId = passportIdInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  
  if (!name || !surname || !phone || !password || !confirmPassword) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  
  if (!isValidFIO(name)) {
    alert('Имя должно начинаться с заглавной буквы, может содержать только русские буквы, пробел и дефис');
    return;
  }

  if (!isValidFIO(surname)) {
    alert('Фамилия должна начинаться с заглавной буквы, может содержать только русские буквы, пробел и дефис');
    return;
  }

  if (patronymic) {
      if (!isValidFIO(patronymic)) {
      alert('Отчество должно начинаться с заглавной буквы, может содержать только русские буквы, пробел и дефис');
      return;
    }
  }
  
  if (!isValidPhone(phone)) {
    alert('Телефон может содержать только цифры, начинаетмя с +7 или 8, и 10 цифр после');
    return;
  }
  
  if (!isValidPassportSeries(passportSeries)) {
    alert("В серии паспорта 4 цифры!")
    return;
  }
  if (!isValidPassportId(passportId)) {
    alert("В номере паспорта 6 цифр!")
    return;
  }
  if (!isValidPassword(password)) {
    alert('Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру, на латинице');
    return;
  }
  if (!isValidPassword(password)) {
    alert('Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру');
    return;
  }
  if (password != confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }
  form.submit();
});

function isValidFIO(name) {
  const pattern = /^[А-ЯЁ][а-яё]{0,30}(( |-)([А-ЯЁ][а-яё]{0,30})){0,2}$/;
  return pattern.test(name);
}

function isValidPhone(phone) {
  const pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/;
  return pattern.test(phone);
}

function isValidPassportSeries(passportS) {
  const pattern = /^\d{4}$/;
  return pattern.test(passportS);
}
function isValidPassportId(passportId) {
  const pattern = /^\d{6}$/;
  return pattern.test(passportId);
}
function isValidPassword(password) {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/;
  return pattern.test(password);
}