$(function () {
  //what radio value did they select?

 
  let userJSON = {
    email: "Weston email address",
  };

  $("#loadData").click(() => {
    console.log("in button click event");

    $("#email").val(userJSON.email);
  });

  $("input[type=radio]").on("change", function () {


    let radioChoice = $("input[type=radio]:checked").val(); 
    let newWordList = getWords(radioChoice);
    console.log(newWordList);

    let optionList = "";

    for (i = 0; i < newWordList.length; i++) {
      optionList += `<option value=" ${newWordList[i]} ">${newWordList[i]} </option>`;
    }
    console.log(optionList);

    $("#letterWordsSelect").empty().append(optionList);
  });

  $("#submitForm").on("click", (e) => {
    e.preventDefault();

    console.log("clicked the button");

    // get data from an input

    let dataStuff = `{ "letterSelected:" " ${$(
      "input[type=radio]:checked"
    ).val()} " }`;

    // display data from that input

    console.log(dataStuff);

    // do that suff 2x
  });
});

function getWords(word) {
  console.log("in f/n getWords, here the paramter: ", word);

  let jediColor = ["Blue 🟦", "Green 🟩", "Purple 🟪"];
  let sithColor = ["Red 🟥", "red 🟥", "Red 🟥 (Come on if you chose sith you knew this was coming.😈) "];
  let other = ["Orange 🟧", "White ⬜", "Black ⬛", "Yellow 🟨"];

  //todo: change to a switch/case ctrl structure.

  if (word === "jedi") {
    return jediColor;
  } else if (word === "sith") {
    return sithColor;
  } else if (word === "other") {
    return other;
  } else {
    return ["please select a letter"];
  }
}

function refreshPage(){
  $("#row").html("");
  var getValue = document.getElementById("loadData");
    if (getValue.value !="") {
      getValue.value = "";
    }}
