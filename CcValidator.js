/*Function for validating the user credit card number.*/
const validateCard = cardNumber => {
  let sum = 0;
  let counter = 1;
  for (var i = cardNumber.length - 1; i >= 0; i--) {
    if (counter % 2 === 0) {
      cardNumber[i] * 2 > 9 ? sum += (cardNumber[i] * 2) - 9 : sum += cardNumber[i] * 2;
    } else {
      sum += cardNumber[i];
    }
    counter++;
  }
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
//--------------------------------------------------------------

/*Function to recognise that the batch invalid card belong to which organisations.*/
const idInvalidCardCompanies = batchOfInvalidCards => {
  let cardIssued = [];
  for (var k = 0; k < batchOfInvalidCards.length; k++) {
    let x;
    x = batchOfInvalidCards[k].join('');
    switch (x[0]) {
      case '3':
        x = `+ The Credit Card number ${x} which is issued by Amex(American Express) is a invalid card number.`;
        break;
      case '4':
        x = `+ The Credit Card number ${x} which is issued by Visa is a invalid card number.`;
        break;
      case '5':
        x = `+ The Credit Card number ${x} which is issued by Mastercard is a invalid card number.`;
        break;
      case '6':
        x = `+ The Credit Card number ${x} which is issued by Discover is a invalid card number.`;
        break;
      default:
        x = `+ The Credit Card number ${x} does'nt issued by any recognised organisation and is it also a invalid card number.`;
        break;
    }
    cardIssued.push(x);
  }
  return cardIssued;
}
//-----------------------------------------------------------------------------------------

/*Function which can find Invalid Credit cards from a batch of Credit card numbers.*/
const findInvalidCard = batchOfCards => {
  let invalidCards = [];
  for (var j = 0; j < batchOfCards.length; j++) {
    let result = null;
    result = validateCard(batchOfCards[j]);
    if (result === false) {
      invalidCards.push(batchOfCards[j]);
    }
  }
  return idInvalidCardCompanies(invalidCards);
}
//--------------------------------------------------------------------
let solution = findInvalidCard(batch);
for (var m = 0; m < solution.length; m++) {
  console.log(solution[m]);
}
