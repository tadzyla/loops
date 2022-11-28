
const largerNumber = (firstNumber, secondNumber) => {

    let biggerNumber = 0;

    if( firstNumber > secondNumber ) {
        biggerNumber = firstNumber;
    } else {
        biggerNumber = secondNumber
    }

    console.log(biggerNumber);
    return biggerNumber;
}

largerNumber(8, 2);