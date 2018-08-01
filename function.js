// get random integer number between tow numbers inclusive
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// test function
console.log(getRandomInt(0, 5));

const getRandomString = length => {
  let randomString = "";
  for (let i = 0; i < length; i++) {
    // convert random number to character by ascii code
    const randomCharacter = String.fromCharCode(33 + getRandomInt(0, 126 - 33));

    //concatenate the character to randomString
    randomString += randomCharacter;
  }
  return randomString;
};

// test function
console.log(getRandomString(7));
