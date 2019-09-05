import windowExists from "./windowExists";

const isTouchDevice = () => {
  if (!windowExists()) return false;
  var el = document.createElement('div');
  el.setAttribute('ongesturestart', 'return;'); // or try "ontouchstart"
  return typeof el.ongesturestart === "function";
}

export default isTouchDevice;
