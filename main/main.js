function numObjectExist(number, inputs) {

    var numArray;

    inputs.forEach(function (element) {

        if (number === element.num) {
            numArray = element.cont;
        }
    });

    return numArray;
}

function selectSameNum(input) {

    var inputs = loadAllItems();
    var sameNumArray = [];

    while (input) {
        var remainder = input % 10;
        var input = Math.floor(input / 10);
        var numObject = numObjectExist(remainder, inputs);

        if (numObject) {
            sameNumArray.push(numObject);
        }
    }

    return sameNumArray;
}

function printString(sameNumArray) {

    var result = '';

    for (var j = 0; j < sameNumArray[0].length; j++) {
        for (var i = sameNumArray.length - 1; i >= 0; i--) {

            result += sameNumArray[i][j];

            if (i != 0) {
                result += ' ';
            }
        }
        if (j != sameNumArray[0].length-1) {
            result += '\n';
        }
    }

    return result;
}

function printReceipt(inputs) {

    var input = 910;
    var sameNumArray = selectSameNum(input);
    var result = printString(sameNumArray);

    console.log(result);

}
