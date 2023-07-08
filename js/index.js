let attempts = 0;
let index = 0;

function appStart() {
  const handelkeydown = (event) => {
    const handleEnterKey = () => {};
    const key = event.key.toUpperCase;
    const keycode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-column[data-index='${attempts}${index}']`
    );
    if (event.key === "enter") {
      handleEnterKey();
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index = index + 1;
      {
      }
    }
  };
  window.addEventListener("keydown", handelkeydown);
}

appStart();
