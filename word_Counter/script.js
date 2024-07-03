let box = document.querySelector("#text-box");

box.addEventListener("input", function () {
  let text = this.value;
  let charLength = text.length;
  //console.log(text);
  let char = document.querySelector("#char");
  char.innerHTML = charLength;
  let cleanText = text.trim();
  //console.log(cleanList);
  let cleanList = cleanText.split(" ");
  //console.log(wordCount);
  let wordCount = cleanList.filter(function (element) {
    return element != "";
  });
  document.querySelector("#word").innerHTML = wordCount.length;
});
