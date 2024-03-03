let number = Math.floor(Math.random() * 10);
let count = 0;

let fun = function () {
    let val = parseInt(document.getElementById('value').value);

    if (count >= 2 && val != number) {
        count++;
        document.getElementById('attempt').innerHTML = "Attempt : " + count;
        document.getElementById('label').innerHTML = "Sorry You Lost 😢! Start New Game..";
        document.getElementById('label2').innerHTML = "Answer : "+number;
        document.getElementById('btnOk').disabled = true;
    }
    else {
        if (val == number) {
            count++;
            document.getElementById('attempt').innerHTML = "Attempt : " + count;
            document.getElementById('label').innerHTML = "Correct! You win! 🎉🥳";
            document.getElementById('label2').innerHTML = "Answer : "+number;
            document.getElementById('btnOk').disabled = true;
        }
        else {
            if (val < number) {
                document.getElementById('label').innerHTML = "Higher";
                count++;
                document.getElementById('attempt').innerHTML = "Attempt : " + count;
            }
            else if (val > number) {
                document.getElementById('label').innerHTML = "Lower";
                count++;
                document.getElementById('attempt').innerHTML = "Attempt : " + count;
            }
        }
    }
}
let reset = function () {
    count = 0;
    document.getElementById('label').innerHTML = "";
    document.getElementById('value').value = "";
    document.getElementById('label2').innerHTML = "";
    document.getElementById('attempt').innerHTML = "Attempt : 0";
    document.getElementById('btnOk').disabled = false;
    number = Math.floor(Math.random() * 10);
}
