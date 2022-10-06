var slider = document.querySelector('.calc__slider');
var lightMode = document.querySelector('.calc__light-mode');
var darkMode = document.querySelector('.calc__dark-mode');

slider.addEventListener('click', function () {
    slider.classList.toggle('active');
    document.body.classList.toggle('dark');

});

let keyNums = document.querySelectorAll('.calc__key--num');
let result = document.querySelector('.calc__display-value--current');
let previousNum = document.querySelector('.calc__display-value--previous');

function mouseDown() {
    this.classList.add('click-key-num');
}

function mouseUp() {
    this.classList.remove('click-key-num');
}

var count = 0;
var error = true;
// Animation when click key number
keyNums.forEach(function (keyNum) {
    keyNum.addEventListener('mousedown', mouseDown);
    keyNum.addEventListener('mouseup', mouseUp);
    keyNum.addEventListener('click', () => {

        if (result.innerHTML == '0') {
            result.innerHTML = '';
            if (keyNum.innerHTML == '=') {
                result.innerHTML = '0';
            }
        }
        if (keyNum.innerHTML == 'RESET') {
            result.innerHTML = '0';
            previousNum.innerHTML = '';

        }
        else if (keyNum.innerHTML == 'DEL') {
            if (result.innerHTML !== '0') {
                var arrText = Array.from(result.innerHTML);
                arrText.splice(arrText.length - 1, 1);
                result.innerHTML = arrText.join('');

            }
            else {

                result.innerHTML = '0';
            }
        }
        else if (keyNum.innerHTML == 'x' || keyNum.innerHTML == '-' || keyNum.innerHTML == '+' || keyNum.innerHTML == '/') {
            var multi = '*';
            if (keyNum.innerHTML == 'x') {
                keyNum.innerHTML = multi;
            }

            var operand = keyNum.innerHTML;
            previousNum.innerHTML = result.innerHTML + operand;
            result.innerHTML = '0';
            if (count > 0) {
                console.log('Có lỗi!!!');
            }
            else {
                count++;
                console.log('Không có lỗi!!!');
            }

        }
        else if (keyNum.innerHTML == '=') {
            result.innerHTML = eval(previousNum.innerHTML + result.innerHTML);
            previousNum.innerHTML = '';
        }

        else {
            result.innerHTML += keyNum.innerHTML;
        }

    });
});


