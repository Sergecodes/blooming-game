// $(function () {
//
// });
// grippe aviaire (sort de ce corps)
var numPlayerOptions = document.getElementsByClassName("player-option");

for (let i = 0; i < numPlayerOptions.length; i++) {
  let option = numPlayerOptions[i];
  option.addEventListener("click", () => {
    alert("Clicked option with value ", option.textContent);
  });
}

function handleSelectNumberOfPlayers() {


}
