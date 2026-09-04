
// Reverse Button Logic

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

reverseButton.addEventListener("click", function() {
    textField = document.getElementById("search-input");
    enteredText = textField.value;
    
    resultPara = document.getElementById("reversed-text");
    resultPara.innerHTML = reverseText(enteredText);
});




// ----------- MAP SCRIPTING

// Creating map
var map = L.map('map').setView([51.505, -0.09], 13);

// Adding a tile layer to the map
// Here, we use an OpenStreetMap tile layer.
//   - This usually involves setting the URL template
//     for the tile images, attribution text, and max
//     zoom level of the layer. 
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    // attribution is for the bottom-right corner text citing the source for the map tile layer
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Adding marker, circle, and polgon
//    - Maybe polygon will be useful for capturing the precise zone

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 2414.02
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
], {
    color: 'purple',
    fillColor: '#b0b',
    fillOpacity: 0.2
})
