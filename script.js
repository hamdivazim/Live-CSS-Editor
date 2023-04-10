function update() {
  const css = document.getElementById("css-editor-textarea").value;
  const styleElements = document.getElementsByTagName("style");
  const length = styleElements.length;

  // If there is no style element, create one
  if (length === 0) {
    const styleElement = document.createElement("style");
    document.head.appendChild(styleElement);
  }

  // Apply the CSS changes to all style elements
  for (let i = 0; i < length; i++) {
    styleElements[i].innerText = css;
  }
}
