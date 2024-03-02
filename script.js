// console.log("MAS");
const inputElements = document.querySelectorAll(".card__input");
const submitButton = document.querySelector(".card__button");

const validateDay = (day, month) => {
  if (day) {
    if (month === "2") {
      if (day > 0 && day <= 29) return true;
      else return false;
    } else {
      if (day > 0 && day <= 31) return true;
      else return false;
    }
  }
};

const validateMonth = (month) => {
  if (month && month > 0 && month <= 12) {
    // calculateAge(year, month, day);
    return true;
  }
};

const validateYear = (year) => {
  const curYear = new Date().getFullYear();
  if (year && year > 0 && year <= curYear) {
    // calculateAge(year, month, day);
    return true;
  }
};

const isDateValid = (dayElement, monthElement, yearElement) => {
  let isValid = [false, false, false];
  if (!validateYear(yearElement.value)) {
    yearElement.classList.add("card__input--error");
  } else {
    isValid[2] = true;
    yearElement.classList.remove("card__input--error");
  }

  if (!validateMonth(monthElement.value)) {
    monthElement.classList.add("card__input--error");
  } else {
    isValid[1] = true;
    monthElement.classList.remove("card__input--error");
  }
  if (!validateDay(dayElement.value, monthElement.value)) {
    dayElement.classList.add("card__input--error");
  } else {
    isValid[0] = true;
    dayElement.classList.remove("card__input--error");
  }

  return isValid.every((item) => item === true);
};

const calculateAge = (year, month, day) => {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDay() < birthDate.getDay())
  ) {
    age--;
  }

  return age;
};

const onClickHandler = () => {
  const dayElement = document.querySelector(".card__input[name='day']");
  const monthElement = document.querySelector(".card__input[name='month']");
  const yearElement = document.querySelector(".card__input[name='year']");
  const resultElement = document.querySelector(".card__resultValue");

  if (!isDateValid(dayElement, monthElement, yearElement)) {
    resultElement.textContent = "--";
    const errorMessage = document.querySelector(".card__errorMessage");
    return;
  }

  resultElement.textContent = calculateAge(
    yearElement.value,
    monthElement.value,
    dayElement.value
  );
};

inputElements.forEach((item) => {
  item.addEventListener("keydown", (e) => {
    e.key === "Enter" && onClickHandler();
  });
});

submitButton.addEventListener("click", onClickHandler);
