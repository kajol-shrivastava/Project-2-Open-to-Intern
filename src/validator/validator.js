// function for string verification
const isValid = function (value) {
  if (typeof value == undefined || value == null) return false;
  if (typeof value == "string" && value.trim().length == 0) return false;
  else if (typeof value == "string") return true;
};

const isValidLink = function (link) {
  return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
    link
  );
};

const isValidName = function (name) {
  return /^[a-zA-Z ]{2,30}$/.test(name);
};

const isValidRequest = function (data) {
  if (Object.keys(data).length == 0) return false;
  return true;
};

module.exports = {
  isValid,
  isValidLink,
  isValidName,
  isValidRequest,
};
