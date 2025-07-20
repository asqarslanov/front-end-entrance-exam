import { globalState, setGlobalState } from "./global-state";
import { updateUi } from "./update";

export function initInput() {
  let state = globalState();

  const greetingDom = document.getElementById("input-greeting");
  greetingDom.value = state.nameBox.greetingPhrase;
  greetingDom.onchange = (ev) => {
    state.nameBox.greetingPhrase = ev.target.value;
    setGlobalState(state);
    updateUi(state);
  };

  const nameDom = document.getElementById("input-name");
  nameDom.value = state.nameBox.name;
  nameDom.onchange = (ev) => {
    state.nameBox.name = ev.target.value;
    setGlobalState(state);
    updateUi(state);
  };

  const roleDom = document.getElementById("input-role");
  roleDom.value = state.nameBox.role;
  roleDom.onchange = (ev) => {
    state.nameBox.role = ev.target.value;
    setGlobalState(state);
    updateUi(state);
  };
}
