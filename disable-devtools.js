document.onkeydown = function(e) {
  if(e.keyCode == 123) { // F12
    return false;
  }
  if(e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0))) {
    return false;
  }
};