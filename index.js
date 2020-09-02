
String.prototype.reverseString =  () => {
  const newString = "";
  const x = this.length;
  do {
    baruString += this.substring(x - 1, x);
    x--;
  } while (x > 0);
  return newString;
};

"Dika".reverseString();