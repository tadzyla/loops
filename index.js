
const largerNumber = (firstNumber, secondNumber) => {

    let biggerNumber = 0;

    if ( firstNumber > secondNumber ) {
        biggerNumber = firstNumber;
    } else {
        biggerNumber = secondNumber;
    }

    console.log(biggerNumber);
    return biggerNumber;
}

const isEvenNumber = (number) => {

    let resultNumber = '';

    if ( number % 2 === 0 ) {
        resultNumber = 'Even number'
    } else {
        resultNumber = 'Odd number'
    }

    console.log(resultNumber);
    return resultNumber;
}

largerNumber(8, 2);
isEvenNumber(44);