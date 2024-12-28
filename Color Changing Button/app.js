const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
  const randomColor = getRandomColor();
  button.style.backgroundColor = randomColor;
});

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
