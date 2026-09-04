const reverseButton = document.getElementById("reverseButton");

function reverseText(input) {
    const chars = [...input];
    var reversedChars = [];
    for (var i = chars.length; i >= 0; i = i - 1) {
        reversedChars[chars.length - i] = chars[i];
    }
    reversedString = reversedChars.join("");
    return reversedString;
}

reverseButton.addEventListener("click", function() {alert("test alert message")});