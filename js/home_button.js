const ele = document.createElement("button");
ele.id = "home_btn";
ele.textContent = "🏠";
ele.addEventListener("click", function() {
  window.location.href = "https://scripher.github.io";
});
document.body.appendChild(ele);
