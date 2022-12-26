let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");
let index = 0;

document.querySelector(".btn").addEventListener("click", () => {
  container3.style.display = "block";
});
document.querySelector("#x-icon").addEventListener("click", () => {
  container3.style.display = "none";
});

document.querySelector("#check-icon").addEventListener("click", () => {
  let noteText = document.querySelector("#note-text");
  let block = document.createElement("div");
  let text = document.createElement("h1");
  const randomMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
  const randomRotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(-3deg)",
    "rotate(-5deg)",
    "rotate(-10deg)",
  ];
  const randomColors = [
    "#c2ff3d",
    "#ff3de8",
    "#3dc2ff",
    "#04e022",
    "#bc83e6",
    "#ebb328",
  ];

  text.textContent = noteText.value;
  text.className = "note-text";

  if (index > randomColors.length - 1) index = 0;

  text.setAttribute(
    "style",
    `margin:${
      randomMargin[Math.floor(Math.random() * randomMargin.length)]
    }; background-color:${randomColors[index++]}; transform:${
      randomRotate[Math.floor(Math.random() * randomRotate.length)]
    }`
  );

  block.appendChild(text);
  container2.insertAdjacentElement("beforeend", block);

  block.addEventListener("mouseenter", () => {
    block.style.transform = "scale(1.1)";
  });

  block.addEventListener("mouseleave", () => {
    block.style.transform = "scale(1)";
  });

  block.addEventListener("dblclick", () => {
    block.remove();
  });

  noteText.value = "";
});
