const pPrime = document.getElementById("pPrime");
const pRepeatLetter = document.getElementById("pRepeatLetter");
const buttonPrime = document.getElementById("buttonPrime");
const buttonRepeatLetter = document.getElementById("buttonRepeatLetter");
const pSameLetter = document.getElementById("pSameLetter");
const buttonSameLetter = document.getElementById("buttonSameLetter");
function isPrime(aNumber) {
  if (aNumber === 2 || aNumber === 1) {
    pPrime.textContent = `The number ${aNumber} is prime.`;
  } else if (aNumber > 2) {
    for (let i = 2; i < aNumber; i++) {
      if (aNumber % i === 0) {
        pPrime.textContent = `The number ${aNumber} is not prime.`;
        break;
      } else {
        pPrime.textContent = `The number ${aNumber} is prime.`;
        break;
      }
    }
  } else if (aNumber < 0) {
    pPrime.textContent = `The number ${aNumber} is negative.`;
  } else {
    pPrime.textContent = `The ${aNumber} is not a number.`;
  }
}

function runLength(str) {
  const max = 35;
  const pattern = new RegExp("^[A-Z]+$", "i");
  if (str > max) {
    pRepeatLetter.textContent = `The string ${str} is to long.`;
  } else {
    if (!pattern.test(str)) {
      pRepeatLetter.textContent = `The string ${str} has a numbers, 'y' or 'ñ'.`;
    } else {
      let arrayOfString = [];
      for (let i = 0; i < str.length; i++) {
        arrayOfString.push(str[i]);
      }
      const indexArray = arrayOfString.filter(function (item, index, array) {
        return array.indexOf(item) === index;
      });

      let arrayForEach;
      let finalArray = [];
      for (let i = 0; i < indexArray.length; i++) {
        arrayForEach = arrayOfString.filter((e) => e === indexArray[i]);
        finalArray.push(arrayForEach.length + indexArray[i]);
      }

      const finalString = finalArray.join("");
      pRepeatLetter.textContent = `RLE: ${finalString}.`;
    }
  }
}

function changeOfLetter(str) {
  const stringOfWord = str.split(" ");
  let arrayOfString = [];
  for (let i = 0; i < stringOfWord.length; i++) {
    arrayOfString.push([stringOfWord[i]]);
  }
  let arraySpaceWord = [];
  for (let i = 0; i < arrayOfString.length; i++) {
    arraySpaceWord.push(arrayOfString[i][0].split(""));
  }

  let newArrayWithOrder = [];
  for (let i = 0; i < arraySpaceWord.length; i++) {
    const orderLetterOsArraySpaceWord = arraySpaceWord[i].filter(
      (item, index, array) => array.indexOf(item) === index
    );
    newArrayWithOrder.push(orderLetterOsArraySpaceWord.sort().join(""));
  }

  const arraySameLetters = newArrayWithOrder.filter(
    (item, index, array) => array.indexOf(item) === index
  );

  let numberRepeatSameWord = [];
  for (let i = 0; i < arraySameLetters.length; i++) {
    const wordsWithSameLetters = newArrayWithOrder.filter(
      (e) => e === arraySameLetters[i]
    );

    if (wordsWithSameLetters.length > 1) {
      numberRepeatSameWord.push(wordsWithSameLetters);
    }
  }
  let finallyNumberRepeatWords = numberRepeatSameWord.length;
  pSameLetter.textContent = `The anagram's number are: ${finallyNumberRepeatWords}.`;
}

buttonPrime.addEventListener("click", () => {
  const numberPrime = +document.getElementById("prime").value;

  isPrime(numberPrime);
});

buttonRepeatLetter.addEventListener("click", () => {
  const repeatLetter = document.getElementById("repeatLetter").value;
  runLength(repeatLetter);
});

buttonSameLetter.addEventListener("click", () => {
  const sameLetter = document.getElementById("sameLetter").value;
  changeOfLetter(sameLetter);
});
