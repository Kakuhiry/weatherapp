document.onkeypress = function (e) {
  e = e || window.event;


  if (e.key === "e") {
    document.documentElement.classList.toggle("yellow-mode");
    console.log(new Date().toLocaleTimeString())
  }
  
  else if (e.key === "Enter") {
    document.documentElement.classList.toggle("dark-mode");
    console.log(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}).toString())
  }
  
};
