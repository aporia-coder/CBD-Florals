const textBoxes = document.querySelectorAll(".product-text");

const showPanels = (i) => {
  textBoxes.forEach((textBox) => {
    textBox.style.display = "none";
  });
  textBoxes[i].style.display = "block";
};

showPanels(0);
