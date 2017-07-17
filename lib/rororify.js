'use strict';

window.rororify = (function() {
  var isRoro = false;

  return {
      init: init
  }

	function changeClassToRoro(e) {
    if (isRoro){
		  document.getElementById('roroToBe').classList.remove("roro");      
      isRoro = false;
    }
    else{
      document.getElementById('roroToBe').classList.add("roro");      
      isRoro = true;
    }
	};

	function init() {
		document.getElementById('rororify').addEventListener('click', changeClassToRoro);
	};

})();
