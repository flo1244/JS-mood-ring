const dropDown = document.querySelector("#moods");
const bodyColor = document.querySelector("body");

dropDown.addEventListener("change", function (e) {
  const mood = e.target.value;
  if (mood === "happy") {
    bodyColor.classList.remove("sad");
    bodyColor.classList.remove("passionate");
    bodyColor.classList.add("happy");
  } else if (mood === "sad") {
    bodyColor.classList.remove("happy");
    bodyColor.classList.remove("passionate");
    bodyColor.classList.add("sad");
  } else if (mood === "passionate") {
    bodyColor.classList.remove("happy");
    bodyColor.classList.remove("sad");
    bodyColor.classList.add("passionate");
  }
});
