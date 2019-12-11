var inputText = document.getElementById("txt"),
  items = document.querySelectorAll("#list li"),
  tab = [],
  index;

// get the selected li index using array
// populate array with li values

for (var i = 0; i < items.length; i++) {
  tab.push(items[i].innerHTML);
}

// get li index onclick
for (var i = 0; i < items.length; i++) {
  items[i].onclick = function() {
    index = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + " INDEX = " + index);
    // set the selected li value into input text
    inputText.value = this.innerHTML;
  };
}

function refreshArray() {
  // clear array
  tab.length = 0;
  items = document.querySelectorAll("#list li");
  // fill array
  for (var i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
  }
}
function addLI() {
  var listNode = document.getElementById("list"),
    textNode = document.createTextNode(inputText.value),
    liNode = document.createElement("LI");
  liNode.appendChild(textNode);
  listNode.appendChild(liNode);
  refreshArray();

  // add event to the new LI

  liNode.onclick = function() {
    index = tab.indexOf(liNode.innerHTML);
    console.log(liNode.innerHTML + " INDEX = " + index);
    // set the selected li value into input text
    inputText.value = liNode.innerHTML;
  };
}
// edit the selected li using input text
function editLI() {
  items[index].innerHTML = inputText.value;
  refreshArray();
}

function deleteLI() {
  refreshArray();
  if (items.length > 0) {
    items[index].parentNode.removeChild(items[index]);
    inputText.value = "";
  }
}
