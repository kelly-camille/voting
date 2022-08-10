window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {

    event.preventDefault();
    let minorVote = document.getElementById("minors");
    minorVote.setAttribute("class", "hidden");
    let adultVote = document.getElementById("over-18");
    adultVote.setAttribute("class", "hidden");

    // gathering age value 

    const age = parseInt(document.querySelector("input#age").value);

    if (age >= 18) {
      adultVote.removeAttribute("class");
    } else {
     (age < 18)
      minorVote.removeAttribute("class");
   }
  };
};
