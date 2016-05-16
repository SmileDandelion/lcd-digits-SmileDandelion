describe('lcd-digits', function () {

    var inputs;

    beforeEach(function () {
        inputs = 910;
    });

    it('should print correct text', function () {

        spyOn(console, 'log');

        printReceipt(inputs);

        var expectText = '._.' + ' ' + '...' + ' ' + '._.' + '\n' + '|_|' + ' ' + '..|' + ' ' + '|.|' + '\n' + '..|' + ' ' + '..|' + ' ' + '|_|';
        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('unit testing', function () {

    var testNewArray;

    describe('selectSameNum', function () {

        var input = 910;

        it('should creat a new array which is equal to input number', function () {

            var expectNewArray = [
                ['._.', '|.|', '|_|']
                ,
                ['...', '..|', '..|']
                ,
                ['._.', '|_|', '..|']
            ];

            testNewArray = selectSameNum(input);
            expect(testNewArray).toEqual(expectNewArray);

        });
    });

    describe('printString', function () {

        it('should creat a  right result', function () {

            var expectResult = '._.' + ' ' + '...' + ' ' + '._.' + '\n' + '|_|' + ' ' + '..|' + ' ' + '|.|' + '\n' + '..|' + ' ' + '..|' + ' ' + '|_|';

            var testResult = printString(testNewArray);

            expect(testResult).toEqual(expectResult);
        });
    });

});

