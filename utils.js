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

export { validateDay, validateMonth, validateYear, isDateValid, calculateAge };
