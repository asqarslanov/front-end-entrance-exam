import html2pdf from "html2pdf.js";
import "../css/modern-normalize.css";
import "../css/style.css";
import { globalState } from "./global-state";
import { initInput } from "./input";
import { initRipples } from "./ripple";
import { updateUi } from "./update";

main();
function main() {
  initInput();
  updateUi(globalState());
  initRipples();
}

document.getElementById("download-button").onclick = () => {
  const app = document.getElementById("bento-flexbox");
  html2pdf(app, { margin: 6, filename: "cv.pdf", html2canvas: { scale: 5 } });
};
