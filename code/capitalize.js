function capitalize(string) {
  let str = string.split("");
  str[0] = str[0].toUpperCase();
  return str.join("");
}
module.exports = capitalize;
