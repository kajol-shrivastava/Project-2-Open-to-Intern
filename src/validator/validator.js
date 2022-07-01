// function for string verification
const isValid = function (value) {
  if (typeof value == "undefined" || value == null) return false;
  if (typeof value == "string" && value.trim().length == 0) return false;
  else if (typeof value == "string") return true;
};

const isValidLink = function (link) {
  return /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i.test(
    link
  );
};

const isValidName = function (name) {
  return /^[A-Za-z]+$/.test(name);
};

const isValidRequest = function (data) {
  if (Object.keys(data).length == 0) return false;
  return true;
};

const isValidMail = function (v) {
  return /^([0-9a-z]([-_\\.]*[0-9a-z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/.test(v);
};

const isValidMobile = function (num) {
  return /^[6789]\d{9}$/.test(num);
};

const isValidIntern = function (intern) {
  return /^[a-zA-Z ]{2,30}$/.test(intern);
};

module.exports = {
  isValid,
  isValidLink,
  isValidName,
  isValidRequest,
  isValidMail,
  isValidMobile,
  isValidIntern,
};
