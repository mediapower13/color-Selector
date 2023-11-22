var counter = 0;
var color;
var noOfText = document.getElementById('counter')
noOfText.innerHTML = counter;

function colorSelector() {
    var theBox = document.getElementById('squareBox');
    color = document.getElementById('squareColors').value;
    theBox.style.backgroundColor = color;
}

function increment() {
    counter++;
    noOfText.innerHTML = counter;

}

function decrement() {
    counter--;
    if(counter < 0){
        alert("value cannot be less than 0")
        counter = 0;
    } else {
        noOfText.innerHTML = counter;
    }
}

function GetSummary() {
    var summaryText = document.getElementById('Summary');
    if(counter == 0) {
        summaryText.innerHTML ="There are no " + color + " boxes";
    }else if (counter == 1) {
        summaryText.innerHTML = "There is ony "+ counter + " " + color + " box"
    }else {
        summaryText.innerHTML = "There are " + counter + " " + color + " boxes"
    }
}